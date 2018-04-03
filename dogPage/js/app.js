function Description(object){
  this.name = object.name;
  this.paragraph = object.paragraph;
}

Description.prototype.toHtml = function(){
  var template = Handlebars.compile('dog-template');
  return template(this);
};
