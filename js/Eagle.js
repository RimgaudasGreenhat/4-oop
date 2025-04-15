import { Bird } from "./Bird.js";


export class Eagle extends Bird 
    {
        position ()
        {
            return `${this.name} is siting on a branch now`;
        }
    }