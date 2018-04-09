(function(module){

  var homeController = {};

  homeController.index = function(){
    $('.tab-content').hide();
    $('#homeContent').show();

  };

  $('#addDogBtn').on('click', function(e){
    e.preventDefault();

    var input = {};

    var inputName = $('#inputName');
    var inputParagraph = $('#inputParagraph');
    input.name = inputName.val();
    input.paragraph = inputParagraph.val();

    var desc = new Description(input);

    if (input.name != '' && input.paragraph != ''){
      $('#handleAppend').append(desc.toHtml());
      inputName.val('');
      inputParagraph.val('');
      Description.all.push(input);

      localStorage.dogData = JSON.stringify(Description.all);

    } else{
      alert('Error: please enter in both name and paragraph fields');
    }
  });

  module.homeController = homeController;
})(window);
