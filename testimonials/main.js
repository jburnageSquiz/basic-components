module.exports = async function (input, info) {
  let template = '';
  template+=`<section id="${input.componentID}" class="testimonials">`;
  template+=`<div class="container">`;
  template+=`<div class="row align-items-center">`;
  template+=`<div class="col-lg-5 info" data-aos="fade-up" data-aos-delay="100">`;
    template+=`<h3>${input.sectionHeading}</h3>`;
    template+=`${input.sectionContent}`;
  template+=`</div>`;
  template+=`<div class="col-lg-7" data-aos="fade-up" data-aos-delay="200">`;
  template+=`<div class="swiper">`;
  template+=`<template class="swiper-config">`;
    template+=`{`;
      template+=`"loop": true,`;
      template+=`"speed" : 600,`;
      template+=`"autoplay": {`;
          template+=`"delay": 5000`;
      template+=`},`;
      template+=`"slidesPerView": "auto",`;
      template+=`"pagination": {`;
        template+=`"el": ".swiper-pagination",`;
        template+=`"type": "bullets",`;
        template+=`"clickable": true`;
      template+=`}`;
    template+=`}`;
    template+=`</template>`;
  template+=`<div class="swiper-wrapper">`;
  input.testimonialArray.forEach((item, i) => {
    let itemRating = item.testimonialRating;
    template+=`<div class="swiper-slide">`;
      template+=`<div class="testimonial-item">`;
        template+=`<div class="d-flex">`;
          template+=`<img src="${item.testimonialAvatar.imageVariations.original.url}" class="testimonial-img flex-shrink-0" alt="">`;
        template+=`<div>`;
          template+=`<h3>${item.testimonialName}</h3>`;
          template+=`<h4>${item.testimonialTitle}</h4>`;
            template+=`<div class="stars">`;
              for (let i = 1; i <= itemRating; i++) {
                template+=`<i class="bi bi-star-fill"></i>`;
              }
            template+=`</div>`;
        template+=`</div>`;
    template+=`</div>`;
    template+=`<p><i class="bi bi-quote quote-icon-left"></i>`;
    template+=`<span>${item.testimonialContent}</span>`;
    template+=`<i class="bi bi-quote quote-icon-right"></i></p>`;
    template+=`</div>`;
    template+=`</div>`;
  })

  template+=`</div>`;
  template+=`<div class="swiper-pagination"></div>`;
  template+=`</div>`;
  template+=`</div>`;
  template+=`</div>`;
  template+=`</div>`;
  template+=`</section>`;

  return `${template}`;
};