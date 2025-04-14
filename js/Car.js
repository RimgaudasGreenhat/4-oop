/*
    intro() - apibudina masinos modeli ir spalva
    drive() - nurodzius norima nuvaziuoti atstuma, yra paskaiciuojamos degalu sanaudos, jei nepakanka degalu, tai ribiniu atveju tiesiog sustoja ir masina issijungia (pasidaryt savarankiškai šitą).
    engineOn() - ijungia varykli, jei yra kuro ir jei yra isjungtas
    engineOff() - isjungia varykli, jei yra ijungtas
    refill() - uzpilti degalu, bet ne daugiau, nei telpa ir jei varyklis yra isjungtas
*/

export class Car {
    constructor(model, color, tankMax) {
        this.model = model;
        this.color = color;
        this.tankMax = tankMax;
        this.tank = 0;
        this.engineIsOn = false;
    }

    intro() {
        return `This is ${this.color} ${this.model}.`;
    }

    refill(volume) {
        if (this.engineIsOn) {
            return 'Error: to refill a tank, you must turn off engine first.';
        }

        if (typeof volume !== 'number' || !isFinite(volume)) {
            return 'Error: Only real numbers allowed.';
        }

        if (volume < 0) {
            return `Refill with ${volume} litres is not allowed.`;
        }

        if (this.tankMax - this.tank >= volume) {
            this.tank += volume;
        } else {
            this.tank = this.tankMax;
        }
    }
}