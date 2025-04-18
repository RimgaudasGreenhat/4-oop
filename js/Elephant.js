import { Animal } from "./Animal.js";

export class Elephant extends Animal 
    {
        speak ()
        {
            return this.name + ':' + '🐘';
        }
        spray (weatherCon)
        {
            if (weatherCon === 'Sunny')
                {
                    return '🏳‍🌈'
                }
                else if (weatherCon === 'Cloudy')
                {
                    return '🐘💧'
                }
                else if (weatherCon === 'Cold')
                    {
                        return '🥶'
                    }
                    else
                    {
                        return 'Nurodykite Sunny, Cloudy arba Cold komanda'
                    }
        }
    }