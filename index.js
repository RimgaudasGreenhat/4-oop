// class (klasė) -> object (objektas)
// blyno receptūra -> blynas (valgomas)
// namo brėžinys -> namas

class Dog {
    constructor(name, furColor) {
        this.name = name;
        this.furColor = furColor;
        this.age = 0;
        this.legsCount = 4;
        this.hasTail = true;
        this.isStanding = true;
    }

    hi() {
        return `Hi, my name is ${this.name}!`;
    }

    intro() {
        return `Hi, my name is ${this.name}, my fur is ${this.furColor} and I am ${this.age} years old.`;
    }

    birthday() {
        return `Happy birthday ${this.name}! Now you are ${++this.age} years old!`;
    }

    lostTail() {
        this.hasTail = false;
    }

    lostLeg() {
        if (this.legsCount > 0) {
            this.legsCount--;
        }
    }

    changePose() {
        this.isStanding = !this.isStanding;
    }

    changeFurColor(newColor) {
        this.furColor = newColor;
        return `${this.name} has ${this.furColor} fur.`;
    }
}

const rex = new Dog('Rex', 'black');
const brisius = new Dog('Brisius', 'white');

brisius.lostTail();
brisius.lostLeg();
brisius.changePose();
console.log(brisius);
console.log(brisius.changeFurColor('red'));
console.log(brisius);