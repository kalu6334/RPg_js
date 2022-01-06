class Monk extends Character {
    constructor(name, hp = 8, dmg = 2, mana = 200, status) {
        super(name, hp, dmg, mana, status);
    }
    specialAttak() {
        console.log("Heal")
        this.hp = this.hp + 8
        this.mana = this.mana - 25
    }

}
const monk = new Monk("Moana")