module.exports = async function (input, info) {
  let output = '';
  output += `
    <section id="${input.componentID}" class="pricing">
      <div class="container section-title" data-aos="fade-up">
        <h2>${input.sectionHeading}</h2>
        <div>${input.sectionContent}</div>
      </div>
      <div class="container" data-aos="zoom-in" data-aos-delay="100">
        <div class="row g-4">
  `;
  for (const item of input.offerArray) {
    output += `
          <div class="col-lg-4">
            <div class="pricing-item ${item.offerPromote ? 'featured' : ''}">
              <h3>${item.offerTitle}</h3>
              <div class="icon">
                <i class="bi bi-${item.offerIcon}"></i>
              </div>
              <h4><sup>${item.offerSup}</sup>${item.offerPrice}<span> ${item.offerPriceExtra}</span></h4>
              <ul>
      `;
      item.featureArray.forEach((feature) => {
        if (feature.featureAvailable ) {
          output += `
          <li><i class="bi bi-check"></i> <span>${feature.featureTitle}</span></li>
          `;
      } else {
          output += `
            <li class="na"><i class="bi bi-x"></i> <span>${feature.featureTitle}</span></li>
          `;
      }
      });
      
      let offerURL = "";
      if (item.offerLinkURL) {
        let asset = await info.ctx.resolveUri(item.offerLinkURL);
        offerURL = asset.url;
      }
      output += `
              </ul>
              <div class="text-center"><a href="${offerURL}" class="buy-btn">Buy Now</a></div>
            </div>
          </div>
      `;
  };
  output += `
        </div>
      </div>
    </section>
  `;

  return output;
};