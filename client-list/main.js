module.exports = async function (input, info) {
  let template = `<section id="${input.componentID}" class="clients">`;

  template += `<div class="container-fluid" data-aos="fade-up">`;
  template += `<div class="row gy-4 justify-content-center">`;

  // Use for...of loop to properly handle async operations
  for (const item of input.clientArray) {
    let clientURL = "";
    if (item.clientLinkURL) {
      let asset = await info.ctx.resolveUri(item.clientLinkURL);
      clientURL = asset.url;
    }

    template += `<div class="col-xl-2 col-md-3 col-6 client-logo">`;
    template += `<a href="${clientURL}" title="${item.name}"><img src="${item.clientLogo.imageVariations.original.url}" class="img-fluid" alt=""></a>`;
    template += `</div>`;
  }

  template += `</div>`;
  template += `</div>`;
  template += `</section>`;

  return template;
};