readTextFile(`src/assets/data/portfolio.json`, function(text){
  initLoad(JSON.parse(text));
});





function initLoad(data){

  const id = getParameterByName("id");
  const portfolios = data.portfolios;
  const portfolio = portfolios.find(p => p.id == id);
  console.log(portfolio.id);

  const titleBreadcrumb = document.querySelector(".breadcrumb-title");
  titleBreadcrumb.innerHTML = portfolio.title;
  const titleHeader = document.querySelector(".header-title");
  titleHeader.innerHTML = portfolio.title;

  const imagePortfolio = document.querySelector(".image-portfolio");
  imagePortfolio.setAttribute(`src`,`src/assets/img/${portfolio.img}`);

  const actorPortfolio = document.querySelector(".actor");
  actorPortfolio.innerHTML = `${portfolio.createdBy}`;

  const techPortfolio = document.querySelector(".techs");
  techPortfolio.innerHTML = `${portfolio.techs.join(', ')}`;

  const developerTime = document.querySelector(".developer-time");
  developerTime.innerHTML = `${portfolio.developerTime} (${portfolio.developerAt})`;
  
  const descriptionDeveloper = document.querySelector(".description");
  descriptionDeveloper.innerHTML = `${portfolio.description} `;

  

}




