import { Bird } from "./Bird.js";


export class Parrot extends Bird 
{ 
    speak (tekstas)
    {
        return this.name + ':' + tekstas;
    }
}