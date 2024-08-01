module.exports = async function (input, info) {
  let introTransition = input.introTextTransitionEffect;
  let textTransition = input.textTransitionEffect;
  let imageTransition = input.imageTransitionEffect;
  
  let transitiontMap = {
    "Fade Up": "fade-up",
    "Fade Down": "fade-down",
    "Fade Right": "fade-right",
    "Fade Left": "fade-left"
  }
  let zoomtMap = {
    "Zoom In" : "zoom-in",
    "Zoom In - Up" : "zoom-in-up",
    "Zoom In - Down" : "zoom-in-down",
    "Zoom Out" : "zoom-out",
    "Zoom Out - Up" : "zoom-out-up",
    "Zoom Out - Down" : "zoom-out-down"
  }
  let output = '';
  output += `
    <section id="${input.componentID}" class="features">
      <div class="container section-title" data-aos="${transitiontMap[introTransition]}">
        <h2>${input.sectionHeading}</h2>
        <div>${input.sectionContent}</div>
      </div>
      <div class="container">
  `;

  for (let i = 0; i < input.featureArray.length; i++) {
    const featureItem = input.featureArray[i];
    const isOdd = i % 2 === 0;
    if (isOdd) {
      output += `
        <div class="row gy-4 align-items-center features-item">
          <div class="col-lg-5 order-2 order-lg-1" data-aos="${transitiontMap[featureItem.textTransitionEffect]}" data-aos-delay="200">
            <h3>${featureItem.featureTitle}</h3>
            <p>${featureItem.featureContent}</p>
            <a href="${featureItem.featureLinkURL}" class="btn btn-get-started">${featureItem.featureLinkText}</a>
          </div>
          <div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="${zoomtMap[featureItem.imageTransitionEffect]}" data-aos-delay="${featureItem.imageTransitionDelay}">
            <div class="image-stack">
      `;
      

      if (featureItem.featureImageArray && featureItem.featureImageArray.length > 0) {
        featureItem.featureImageArray.forEach((imgItem, index) => {
          let imageClass = index === 0 ? 'stack-back' : 'stack-front';
          if (featureItem.featureImageArray.length === 1) {
            imageClass = index === 0 ? 'img-fluid stack-back' : 'img-fluid stack-front';
          }

          output += `
            <img src="${imgItem.featureImage.imageVariations.original.url}" alt="${imgItem.featureImage.alt}" class="${imageClass}">
          `;
        });
      }

      output += `
            </div>
          </div>
        </div>
      `;
    } else {
      output += `
        <div class="row gy-4 align-items-stretch justify-content-between features-item">
        <div class="col-lg-6 d-flex align-items-center features-img-bg" data-aos="${zoomtMap[featureItem.imageTransitionEffect]}" data-aos-delay="${featureItem.imageTransitionDelay}">`;

        if (featureItem.featureImageArray && featureItem.featureImageArray.length > 0) {
          featureItem.featureImageArray.forEach((imgItem, index) => {
            let imageClass = index === 0 ? 'stack-back' : 'stack-front';
            if (featureItem.featureImageArray.length === 1) {
              imageClass = index === 0 ? 'img-fluid stack-back' : 'img-fluid stack-front';
            }
  
            output += `
              <img src="${imgItem.featureImage.imageVariations.original.url}" alt="${imgItem.featureImage.alt}" class="${imageClass}">
            `;
          });
        }

        output += `
        </div>
        <div class="col-lg-5 d-flex justify-content-center flex-column" data-aos="${transitiontMap[featureItem.textTransitionEffect]}">
        <h3>${featureItem.featureTitle}</h3>
        <p>${featureItem.featureContent}</p>
        <a href="#" class="btn btn-get-started align-self-start">Get Started</a>
        </div>
        </div>
      `;
    }
  }

  output += `
      </div>
    </section>
  `;

  return output;
};