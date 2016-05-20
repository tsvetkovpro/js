// Counting
var aquarium = {
    Nemo: {type: "fish", species: "clownfish", length: 3.7},
    Marlin: {type: "fish", species: "clownfish", length: 4.1},
    Dory: {type: "fish", species: "blue tang", length: 6.2},
    Peach: {type: "echinoderm", species: "starfish", length: 5.3},
    "Coral Castle": {type: "environment", material: "coquina", moves: false},
    "Dragon Statue": {type: "environment", material: "plastic", moves: false},
    addCritter: function (name, type, species, length) {
        this[name] = {type: type, species: species, length: length};
    },
    takeOut: function ( name ) {
        this[name].name = name;
        var temp = this[name];
        delete this[name];
        return temp;
    }
};

console.log(aquarium);
console.log(aquarium.takeOut("Dory"));


// Enumeration with the for-in loop
// The for-in loop allows us to access each enumerable property in turn.

var numFish = 0;
for (key in aquarium) {
    if (aquarium[key].type == "fish") {
        numFish++;
    }
}
console.log(aquarium["addCritter"].type); // undefined
console.log(numFish);  // 2


// adding our fish counter to the aquarium
// We’ll need to build a function property using our loop
var aquarium1 = {
    Nemo: {type: "fish", species: "clownfish", length: 3.7},
    Marlin: {type: "fish", species: "clownfish", length: 4.1},
    Dory: {type: "fish", species: "blue tang", length: 6.2},
    Peach: {type: "echinoderm", species: "starfish", length: 5.3},
    "Coral Castle": {type: "environment", material: "coquina", moves: false},
    "Dragon Statue": {type: "environment", material: "plastic", moves: false},
    addCritter: function (name, type, species, length) {
        this[name] = {type: type, species: species, length: length};
    },
    takeOut: function ( name ) {
        this[name].name = name;
        var temp = this[name];
        delete this[name];
        return temp;
    }
};
aquarium1.countFish = function () {
    var numFish = 0;
    for (key in this) {
        if (this[key].type == "fish") {
            numFish++
        }
    }
    return numFish;
}
console.log(aquarium1.countFish()); // 3 - Awesome!

var poorDory = aquarium1.takeOut("Dory");
console.log(poorDory);
console.log(aquarium1.countFish());































