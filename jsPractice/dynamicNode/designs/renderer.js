  //read from the template file
  // insert values into the content

  //write out to the response

  var fs = require('fs');

  function mergeValues(values, content){
    //cycle over the keys

    for(var key in values){
      //replace all {{key}} with the values form the values object
      content = content.replace('{{' + key + '}}', values[key]);

    }
    return content;

      // return merged content

  }

  function view(templateName, values, response){

    var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding:'utf8'});
    fileContents = mergeValues(values, fileContents);
    response.write(fileContents);
  }

  module.exports.view = view;
