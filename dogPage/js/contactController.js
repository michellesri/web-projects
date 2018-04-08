(function(module){

  var contactController = {};

  contactController.index = function(){
    $('.tab-content').hide();
    $('#contactContent').show();

  };

  module.contactController = contactController;
})(window);
