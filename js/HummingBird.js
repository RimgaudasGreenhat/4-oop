import { Bird } from "./Bird.js";


export class Hummingbird extends Bird 
    {
        position ()
        {
            return `${this.name} is flying in the room now`;
        }
    }