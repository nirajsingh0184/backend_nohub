
//Using middleware to modify the req object
function loggingMiddleware(req, res, next) {
    req.body.name="niraj";
    console.log(req.body);
    console.log('Inside Middleware');
    next();  //next used to invoke the next middleware(next controller function))
  }
  
  module.exports = loggingMiddleware;