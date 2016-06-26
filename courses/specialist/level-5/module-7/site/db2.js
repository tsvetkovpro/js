var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var schemaCat = mongoose.Schema({
    name: String,
    age: Number
});

schemaCat.methods.say = function () {
    console.log('Hello from ' + this.get('name'));
};

var Cat = mongoose.model('Cat', schemaCat); // это модель будующей коллекции. аналог в реляционной бд create

/*var kitty = new Cat({ name: 'Барсик'});
kitty.save(function (err) {
    if(err) console.log('error!');

    console.log('meow');
});*/

var murzik = new Cat({ name: 'Мурзик', age:5});
murzik.save(function (err) {
    if(err)
        console.log('murzik error!');
    else
        murzik.say();

});


var barsik = new Cat({ name: 'Барсик', age:"5"});
barsik.save(function (err) {
    if(err)
        console.log('barsik error!');
    else
        barsik.say();
});


var kash = new Cat({ name: 'Каштанка', age:"15"});
kash.save(function (err) {
    if(err)
        console.log('kash error!');
    else
        kash.say();
});