var mongoose = require('mongoose');
// var Course = require('../models/Course');

var Schema = mongoose.Schema;

// create the model below

var barSchema = new Schema ({
    name: String,
    location: String,
    beers: [{type: Schema.Types.ObjectId, ref: 'Beer'}]
}, {
    timestamps: true
});

barSchema.post('remove', function(beer) {
    var Beer = this.model('Beer');
    Beer.find({bar: bar._id}, function(err, beers) {
        beers.forEach(function(beer) {
            beer.bars.remove(bar._id);
            bar.save();    
        });
    });
});


module.exports = mongoose.model('Bar', barSchema); 