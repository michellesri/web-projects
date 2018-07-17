//need body parser to take the data back, convert it to json, and put it back together.
  //we need to do this because the bodyParser will handle on and end events and add it to the req object as req.body.


function bodyParser(req, res, next){
  var body = '';
  req.on('data', chunk => body += chunk);

  req.on('end', () => {
    try {
      req.body = JSON.parse(body);
      next();
    } catch(err) {
      next(err); //pass the error onto next to send it to express as an error handler.
    }
  });
}


