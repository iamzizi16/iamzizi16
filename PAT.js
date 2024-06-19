class HP {
    constructor(nameHP, chip, battery ) {
        this.nameHP = nameHP;
        this.chip = chip;
        this.battery = battery;
    }
}

class sumsang extends HP {
    constructor(nameHP, chip) {
        super(nameHP ,chip, true);
    }

    spek() {
        return `   ${this.nameHP} Sangat bagus`;
    }
}

class redmi extends HP {
    constructor(nameHP, chip) {
        super(nameHP, chip, false);
    }

    perform() {
        return `${this.namefood} Sangat panas membara`;
    }
}

const mysumsang = new sumsang("J2prime ", "Sdg888");
const myredmi = new redmi("note 13", "G30SPKI");

console.log(mysumsang.spek());
console.log(myredmi.perform());
console.log(mysumsang);
console.log(myredmi);
