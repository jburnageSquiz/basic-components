// Client Side JS goes here
// Function to check if a cookie with a given name exists
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return null;
}

// Function to check the CDPConsent value in the nested array
function checkCDPConsent(cookieValue) {
    try {
        const parsedValue = JSON.parse(decodeURIComponent(cookieValue));
        return parsedValue.CDPConsent === 1;
    } catch (error) {
        return false; // Handle parsing error or invalid JSON format
    }
}

// Check if the cookie 'squiz.cdp.consent' exists and has the correct CDPConsent value
const consentCookie = getCookie('squiz.cdp.consent');

if (consentCookie && checkCDPConsent(consentCookie)) {
    console.log('Cookie present and CDPConsent is equal to 1');
} else {
    console.log('Cookie not present or CDPConsent is not equal to 1');
}


if (consentCookie) {
    console.log('CDP Consent Cookie present');
} else {
    console.log('Cookie not present');
    var myOffcanvas = new bootstrap.Offcanvas(document.getElementById('dxpConsent'));
    myOffcanvas.show();    
}

function giveConsent() {
    setConsent(1);
    return false;
}
function revokeConsent() {
    setConsent(0);
    return false;
}

function setConsent(consented) {
    fetch(`/__dxp/cdp/setConsent`, {
        method: `POST`,
        headers: {
            [`Content-Type`]: `application/json`
        },
        body: JSON.stringify({
            "CDPConsent": consented,
            "documentVersion": "1.0"
        }),
        redirect: `follow`
    }).then((data) => {
        console.log("testing consent")
        console.log(data)
        console.log(`consent set to ${consented}`);
        //location.reload();
    }).catch(() => {
        alert(`Failed to set consent`);
    });
}

//give button
document.getElementById('consent-button-give').addEventListener('click', function(e){
        console.log('click')
        giveConsent();
        e.preventDefault();
});

//revoke button
document.getElementById('consent-button-revoke').addEventListener('click', function(e){
        console.log('click')
        revokeConsent();
        e.preventDefault();
});

    function sendCustomEvent(id, type) {
        var successMessage = "...";
        document.getElementById("response").innerHTML = successMessage;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "source": "custom",
            "action": id,
            "event": {
                "type": type
            }
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        //fetch("https://your-organization.matrix.squiz.cloud/__dxp/events/custom", requestOptions) 
        fetch("/__dxp/events/custom", requestOptions)
        .then(response => {
            var successMessage = "";
            if (response.status === 202){
                successMessage = "Event successfully tracked - persona should be updated within 30 seconds.";
            }else{
                successMessage = "Error with event - please try again, or grant consent first."
            }
            document.getElementById("response").innerHTML = successMessage;
            })
        .then((result) => {
            console.log(result)
            })
        .catch(error => console.log('error', error));

    }

function attachPersonaClickListener(element) {
  element.addEventListener('click', function() {
    var persona = element.getAttribute('data-persona');
    var event = element.getAttribute('data-event');
    sendCustomEvent(event, persona);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var personaButtons = document.getElementsByClassName('demo-persona');

  for (var i = 0; i < personaButtons.length; i++) {
    attachPersonaClickListener(personaButtons[i]);
  }
});