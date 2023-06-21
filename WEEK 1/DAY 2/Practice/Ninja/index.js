class Ninja {
    constructor(name) {
        // set all the attributes for a ninja
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        // method to print the name of the Ninja instance
        console.log(this.name);
    }
    showStats() {
        // method to print the stats of a Ninja instance
        console.log(
            `Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`
        );
    }
    drinkSake() {
        // method to add 10 to the health attribute
        this.health += 10;
    }
}

// create an instance of the Ninja class and call some of its methods
const ninja1 = new Ninja("Yassine");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();