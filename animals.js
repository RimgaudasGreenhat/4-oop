/*
Transporto priemones:
    Automobilinis:
        Audi
        Volkswagen
        Renault
    Motociklai:
        Suzuki
        Kawasaki
        Jawa
        Vespa
    Sunkvezimiai:
        Volvo
        Man
        Scania
*/

/*
Elektronika:
    Smart phone:
        - Samsung smart phone
        - Apple smart phone
        - Nokia smart phone
    Tablet:
        - Samsung tablet
        - Xiomi tablet
    Laptop:
        - Asus
        - Lenovo
        - IBM
        - Acer

*/

/*
Animal:
    Pet:
        - Dog
        - Cat
        - Hamster
    Bird:
        - Parrot
        - Hummingbird
        - Eagle
    Fish:
        - Shark
        - Dolphin
        - Tuna
        - Pike
*/

import { Cat } from "./js/Cat.js";
import { Dog } from "./js/Dog.js";
import { Hamster } from "./js/Hamster.js";
import { Pike } from "./js/Pike.js";
import { Shark } from "./js/Shark.js";
import { Eagle } from "./js/Eagle.js";
import { Hummingbird } from "./js/HummingBird.js";
import { Parrot } from "./js/Parrot.js";
import { Elephant } from "./js/Elephant.js";
import { Monkey } from "./js/Monkey.js";


const rex = new Dog('Rex', 'black');
const rainis = new Cat('Rainis', 'mixed');
const keksas = new Hamster('Keksas', 'brown');


const antanas = new Shark('Antanas');
const lydeka = new Pike('Lydeka');
const bloodwing = new Eagle ('Bloodwing');
const dusliarka = new Hummingbird ('Dusliarka');
const polly = new Parrot ('Polly');
const Hortonas = new Elephant ('Horton');
const Apu = new Monkey ('Apu');


console.log(bloodwing.hi());
console.log(lydeka.hi());
console.log(lydeka.grantWish('lots of cash'));
console.log(antanas.hi());
console.log(bloodwing.position());
console.log(dusliarka.position());
console.log(polly.speak('Ką žiūri gaidy?'));
console.log(Apu.hi());
console.log(Hortonas.speak());
console.log(Apu.speak());
console.log(Apu.count(1,2));
console.log(Apu.count(4,2));
console.log(Hortonas.spray('Sunny'));
console.log(Hortonas.spray('Cloudy'));
console.log(Hortonas.spray('IDK'));