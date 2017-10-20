var mongoose = require('mongoose');
var Subject = mongoose.model('Subject') ;

module.exports = {                                                    //  exportint
  showAll: function(req, res) {
    Subject.find({}, function(err, fetched_subject) {
      res.json(fetched_subject)
    })
  },

  create: function(req, res) {
    console.log("heelo", req.body)
    var subject = new Subject( req.body );

    subject.save(function(err, subject){
      if(err){
        console.log(err)
        console.log('inside DB create method, the input is ')
        console.log('There are errors before saving subject');
        // res.json(err)
        res.json({ message: 'Cant save in database', errors: subject.errors})
      } else {
        console.log('successful saved subject in DB');
        res.json({ message:"Successful saved", subject})
      }
    })
  },


}
