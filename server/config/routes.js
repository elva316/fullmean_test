var mongoose = require('mongoose');
var path = require('path');
var controllers = require('./../controllers/model_controller.js');

module.exports = function(app){

  app.get('/show', controllers.showAll);
  app.post('/create', controllers.create);

  app.all("*", (req,res,next) => {
       res.sendFile(path.resolve("./../public/dist/index.html"))
   });
   //     when do we use this

}
