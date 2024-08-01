module.exports = async function (input, info) {
  let output = '';
  output += `
    <section id="${input.componentID}" class="faq">
      <div class="container">
        <div class="row gy-4">
  `;
      if (input.sectionLayout) {
        output += `
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="content px-xl-5">
                <h3>${input.sectionHeading}</h3>
                <div>${input.sectionContent}</div>
              </div>
            </div>
            <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
        `;
      } else {
        output += `
          <div class="col-lg-12" data-aos="fade-up" data-aos-delay="200">
        `;  
      }

        output += `
            <div class="faq-container">
        `;
        input.faqArray.forEach((item, i) => {
            output += `
                  <div class="faq-item">
                    <h3><span class="num">${i+1}.</span> <span>${item.faqTitle}</span></h3>
                    <div class="faq-content">
                    ${item.faqContent}
                    </div>
                    <i class="faq-toggle bi bi-chevron-right"></i>
                  </div>
            `;
        })
    output += `
          </div>
        </div>
      </div>
    </div>
  </section>
  `;

return output;
};