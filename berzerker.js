class Berzerker extends Character {
    constructor(name, hp = 8, dmg = 4, mana = 0, status) {
        super(name, hp, dmg, mana, status);
    }
    specialAttack() {
        console.log("Rage");
        this.dmg = this.dmg + 1;
    }

}
const berzerker = new Berzerker("Draven");