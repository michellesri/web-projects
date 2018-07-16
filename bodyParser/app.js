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


