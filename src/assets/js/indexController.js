readTextFile(`src/assets/data/portfolio.json`, function(text){
  initLoad(JSON.parse(text));
});


function initLoad(data){
  var portfolios = data.portfolios;
  
  const containerPortfolios = document.querySelector(`.portfolio-items`);


  for(portfolio of portfolios){
    console.log(portfolio)

   /* portfolio-item */
    const containerPortfolio = document.createElement('div');
    containerPortfolio.className = `col-lg-4 portfolio-item`;
    containerPortfolios.appendChild(containerPortfolio);

   /* image-border */
    const imageBorder = document.createElement('div');
    imageBorder.className = `image-border`;
    containerPortfolio.appendChild(imageBorder);

    /* portfolio-item-content */  
    const contentPortolio = document.createElement('div');
    contentPortolio.className = `portfolio-item-content`;
    imageBorder.appendChild(contentPortolio);

      /* portfolio-image */  
      const imagePortolio = document.createElement('img');
      imagePortolio.attributes
      imagePortolio.setAttribute(`src`, `src/assets/img/${portfolio.img}`);
      imagePortolio.className = 'img-fluid img-portfolio';     
      contentPortolio.appendChild(imagePortolio);

      /* img-overlay */
      const imgOverlay = document.createElement('div');
      imgOverlay.className = 'img-overlay text-center';     
      contentPortolio.appendChild(imgOverlay);
    
        /* img-overlay-content */
        const imgOverlayContent = document.createElement('div');
        imgOverlayContent.className = `img-overlay-content`;
        imgOverlay.appendChild(imgOverlayContent);

          /* portolio-icon */
          const portfolioIcon = document.createElement('div');
          portfolioIcon.className = `portfolio-icon`;
          imgOverlayContent.appendChild(portfolioIcon);


            const portfolioModalHyperlink = document.createElement('a');
            portfolioModalHyperlink.setAttribute(`type`,`button`);
            portfolioModalHyperlink.setAttribute(`target`,`_blank`);
            portfolioModalHyperlink.setAttribute(`href`,`portfolio-single.html?id=${portfolio.id}`);
              const iconPortfolioModalHyperlink = document.createElement('i');
              iconPortfolioModalHyperlink.className = `lni-link`;
              portfolioModalHyperlink.appendChild(iconPortfolioModalHyperlink);
            portfolioIcon.appendChild(portfolioModalHyperlink);

            const portfolioGaleryHyperlink = document.createElement('a');
            portfolioGaleryHyperlink.className = `js-zoom-gallery`;
            portfolioGaleryHyperlink.setAttribute(`type`,`button`);
            portfolioGaleryHyperlink.setAttribute(`data-toggle`,`modal`);
            portfolioGaleryHyperlink.setAttribute(`data-targe`,`#portfolio-single`);
            portfolioGaleryHyperlink.setAttribute(`href`,`src/assets/img/${portfolio.img}`);
              const iconPortfolioGaleryHyperlink = document.createElement('i');
              iconPortfolioGaleryHyperlink.className = `lni-search`;
              portfolioGaleryHyperlink.appendChild(iconPortfolioGaleryHyperlink);
            portfolioIcon.appendChild(portfolioGaleryHyperlink);
        
        /* portfolio-description */
        const portfolioDescription = document.createElement('h5')
        portfolioDescription.className = `mt-3 mb-0`;
        portfolioDescription.innerHTML = '...'
        imgOverlayContent.appendChild(portfolioDescription);

  }

}

