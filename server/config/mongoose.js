var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fullMeanTesting');           //*****     1     //    connect DB


var fs = require('fs');
var path = require('path');

var models_path = path.join(__dirname, './../models');       //*****     2     //   grabing all files from model folder
fs.readdirSync(models_path).forEach(function(file) {         //*****     3    //   go through each file in and interact with each table and its instance
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});
