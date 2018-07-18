var handleTemplate = Handlebars.compile($('#dog-template').text());

var handleAppend = $('#handleAppend');

var dataArray =[];

$.ajax({
  url: 'data.json'
})
.done(function(data){
  dataArray = data;
  renderData(data);
});

function renderData(data){
  data.forEach(function(ele){
    handleAppend.append(handleTemplate(ele));
});
}

// // submit on click, get title.val() and description.val().


// function createObjectToAppend(name, paragraph){
 
//   };
// }

  $('#addDogBtn').on('click', function(e){
    e.preventDefault();

    var input = {};
    dataArray = [];

    var inputName = $('#inputName');
    var inputParagraph = $('#inputParagraph');
    console.log(inputName.val());
    console.log(inputParagraph.val());

    var object = {
      name: inputName.val(),
      paragraph: inputParagraph.val()
    }

    dataArray.push(object);

    renderData(dataArray);
  });
