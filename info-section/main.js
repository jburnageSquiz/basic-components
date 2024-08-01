module.exports = async function (input, info) {
  let template = '';

  let sectionLinkURL = "";
    if (input.sectionLinkURL){
      let assetUrl = await info.ctx.resolveUri(input.sectionLinkURL);
      sectionLinkURL = assetUrl.url;
    }


  template+=`<section class="about" id="${input.componentID}">`;
  template+=`<div class="container" data-aos="fade-up" data-aos-delay="100">`;
  template+=`<div class="row align-items-xl-center gy-5">`;
  template+=`<div class="col-xl-5 content">`;
  template+=`<h3>${input.sectionHeadingTag}</h3>`;
  template+=`<h2>${input.sectionHeading}</h2>`;
  template+=`${input.sectionContent}`;
  template+=`<a class="read-more text-decoration-none" href="${sectionLinkURL}"><span>${input.sectionLinkText}</span><i class="bi bi-arrow-right"></i></a>`;
  template+=`</div>`;
  template+=`<div class="col-xl-7">`;
  template+=`<div class="row gy-4 icon-boxes">`;
  for (var item in input.cardsArray) {
    let tileURL = "";
    if (input.cardsArray[item].cardLinkURL){
      let asset = await info.ctx.resolveUri(input.cardsArray[item].cardLinkURL);
      tileURL = asset.url;
    }

    template+=`<div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">`;
    template+=`<div class="icon-box">`;
    template+=`<a class="card-link text-decoration-none" href="${tileURL}">`;
    template+=`<i class="bi bi-${input.cardsArray[item].cardIcon}"></i>`;
    template+=`<h3>${input.cardsArray[item].cardTitle}</h3>`;
    template+=`<p>${input.cardsArray[item].cardContent}</p>`;
    template+=`</a></div>`;
    template+=`</div>`;
  }
  template+=`</div>`;
  template+=`</div>`;
  template+=`</div>`;
  template+=`</div>`;
  template+=`</section>`;

  return `${template}`;
};