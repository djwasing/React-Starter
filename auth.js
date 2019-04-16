var User = require('./models/User').User;
var md5 = require('md5');


module.exports = function(app){

  app.post('/api/world', (req, res) => {
    console.log(req.body);
    var testdata = new User({
      username: req.body.username,
      password: md5(req.body.password)
    });
    
    testdata.save(function(err, data) {
      if(err) console.log(err);
      else res.json(data);
    });
  });
  
}




