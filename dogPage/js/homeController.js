(function(module){

  var homeController = {};

  homeController.index = function(){
    $('.tab-content').hide();
    $('#homeContent').show();

  };

  var inputName = $('#inputName');
  var inputParagraph = $('#inputParagraph');

  $('#addDogBtn').on('click', function(){
    var inputNameVal = inputName.val();
    var inputParagraphVal = inputParagraph.val();

    $('#handleAppend').append('<div class="paragraph">' + '<h1>' + inputNameVal + '</h1>' + '<p>' + inputParagraphVal + '</p></div>');

    inputName.val('');
    inputParagraph.val('');

  });

  module.homeController = homeController;
})(window);
