class Ninja {
    constructor(name) {
        // set all the attritutes of a Ninja
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        // method to print the Ninja's name
        console.log(this.name);
    }
    showStats() {
        // method to print Ninja stats
        console.log(
            `Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`
        );
    }
    drinkSake() {
        // method to add 10 to the health attribute
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        // call super to set all the base ninja attributes
        super(name);

        // set attributes specifically for Sensei's
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        // method to call drinkSake() and print a string
        this.drinkSake();
        console.log(
            "What one programmer can do in one month, two programmers can do in two months."
        );
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"