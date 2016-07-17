class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return this.name + ' привет!..!';
    }
}

console.log(new Person('Jeffrey').greet());