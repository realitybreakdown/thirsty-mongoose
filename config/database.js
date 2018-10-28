var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/oneToMany',
    {useNewUrlParser: true}
);
