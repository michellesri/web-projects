function setRoutes(){

  page.base('/');

  page('/', homeController.index);
  page('about', aboutController.index);
  page('contact', contactController.index);

  page();
}

setRoutes();
