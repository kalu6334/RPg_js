class Berserker extends Character {
    constructor(name, hp = 8, dmg = 4, mana = 0, status) {
        super(name, hp, dmg, mana, status);
    }
    specialAttak() {
        console.log("Rage")
        this.dmg = this.dmg + 1
    }

}
const berserker = new Berserker("Draven")