module.exports = async function (input, info) {
  let transitionType = input.transitionEffect;
  let transitiontMap = {
    "Fade Up": "fade-up",
    "Fade Down": "fade-down",
    "Fade Right": "fade-right",
    "Fade Left": "fade-left"
  }


  return `
      <section id="hero" class="hero">
            
      <img src="${input.heroImage.imageVariations.original.url}" alt="" data-aos="fade-in">

      <div class="container">
        <div class="row">
          <div class="col-lg-10">
            <h1 data-aos="${transitiontMap[transitionType]}" data-aos-delay="${input.transitionDelay}">${input.heroHeading}</h1>
            <p data-aos="${transitiontMap[transitionType]}" data-aos-delay="${parseInt(input.transitionDelay) + 100}">${input.heroContent}</p>
          </div>
          <div class="col-lg-5">

          </div>
        </div>
      </div>

      </section>
    `
    
};