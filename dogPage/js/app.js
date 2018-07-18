(function(module){

  Description.all = [];

  var paragraphView = {};

  function Description(object){
    this.name = object.name;
    this.paragraph = object.paragraph;

  }

  var handleTemplate = Handlebars.compile($('#dog-template').text());

  Description.prototype.toHtml = function(){
    return handleTemplate(this); //toHtml is run as a method on the Description object 'this' is the object.
  };

  var blah = new Description({
    name: 'funArticle',
    description: 'read before sleeping'
  });

  blah.toHtml();

  // code below can be used to replace Description.prototype.toHtml

  // function toHtml(object){
  //   return handleTemplate(object);
  // }

  Description.loadAll = function(dogData){
    Description.all = dogData.map(function(ele){
      return new Description(ele);

    });
  };

  Description.fetchAll = function(){
    if(localStorage.dogData){
      console.log('i am being logged through the local storage if statement');
      var descriptionParsed = JSON.parse(localStorage.dogData);
      Description.loadAll(descriptionParsed);
      paragraphView.appendHandle();
    }
    else {
      console.log('i am being logged because there was no data in localStorage');

      $.getJSON('dogData.json').done(myFunction);
      function myFunction(data){
        Description.loadAll(data);
        paragraphView.appendHandle();
        localStorage.dogData = JSON.stringify(Description.all);
      }
    }
  };

  paragraphView.appendHandle = function(){
    Description.all.forEach(function(d){
      $('#handleAppend').append(d.toHtml()); // running handleTemplate on each description which gives the html for each for each object.
    }); //d is an instantiated object of Description. which inherits prototype so that d has access to toHtml. and 'this' in handleTemplate refers to the whichever object calls toHtml.
  };

  Description.fetchAll();

  module.Description = Description; //window.description is equal to Description in the iffe scope
  module.paragraphView = paragraphView;

})(window);

// var x = 4 is the same as
// window.x = 4.
// window is the root object
// passing window in the iffe
