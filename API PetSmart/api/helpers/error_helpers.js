// Throw error message.
var Error400 = function (res, msg) {
    const error = Error(msg);
    error.status = 400;
    return res.status(error.status).send({
      error: error.message,
    });
  };
  
  module.exports = {
    Error400,
  };
  