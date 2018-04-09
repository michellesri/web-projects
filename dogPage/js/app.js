(function(module){

  Description.all = [];

  var paragraphView = {};

  function Description(object){
    this.name = object.name;
    this.paragraph = object.paragraph;

  }

  Description.prototype.toHtml = function(){
    var template = Handlebars.compile($('#dog-template').text());
    return template(this);
  };

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
        localStorage.dogData = JSON.stringify(Description.all);
        paragraphView.appendHandle();
      }
    }
  };

  paragraphView.appendHandle = function(){
    Description.all.forEach(function(d){
      $('#handleAppend').append(d.toHtml());
    });
  };

  Description.fetchAll();
  module.Description = Description;
  module.paragraphView = paragraphView;

})(window);
