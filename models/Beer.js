var mongoose = require('mongoose');
// var Course = require('../models/Course');

var Schema = mongoose.Schema;

// create the model below
var commentSchema = new Schema ({
    content: String
}, {
    timestamps: true 
});

var beerSchema = new Schema ({
    name: String,
    style: String,
    bars: [{type: Schema.Types.ObjectId, ref: 'Bar'}],
    comments: [commentSchema]
}, {
    timestamps: true
});

beerSchema.post('remove', function(beer) {
    var Bar = this.model('Bar');
    Bar.find({beer: beer._id}, function(err, bar) {
        bars.forEach(function(bar) {
            bar.beers.remove(beer._id);
            beer.save();    
        });
    });
});


module.exports = mongoose.model('Beer', beerSchema); 