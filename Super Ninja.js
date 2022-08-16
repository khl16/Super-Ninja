class Ninja {
    constructor(name, health=10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`Name:    ${this.name}`);
        console.log(`Health:  ${this.health}`);
        console.log(`Speed:   ${this.speed}`);
        console.log(`Stength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        console.log(`${this.name} drank sake.`);
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("aziz");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();






class Sensei extends Ninja {

    constructor(csc) {
        super(csc);
        this.wisdom = 10;
        this.health=200;
        this.speed=10;
        this.strength=10;
    }

    speakWisdom(){
        super.drinkSake();
    }


}

const newSensei = new Sensei("Ahmed");
newSensei.speakWisdom();
newSensei.showStats();