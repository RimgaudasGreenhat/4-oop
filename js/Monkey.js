import { Animal } from "./Animal.js";

export class Monkey extends Animal 
    {
        speak ()
        {
            return this.name + ':' + '🐒';
        }
        count (n1,n2)
        {
            if((n1 + n2) <= 5 )
                {
                    return `Apu has shown ${n1 + n2} fingers`   
                }
                else
                {
                    return 'Apu throws his shit at you for dissrespecting his 20 IQ, congratulation you have played yourself'
                }
        } 
    }

