(function(module){

  var aboutController = {};

  aboutController.index = function(){
    $('.tab-content').hide();
    $('#aboutContent').show();

  };

  module.aboutController = aboutController;
})(window);
