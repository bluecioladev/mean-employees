const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-employees',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
    .then(db => console.log('Db Conectada'))
    .catch((err) =>console.error(err)) ;