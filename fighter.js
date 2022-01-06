class Fighter extends Character {
    constructor(name, hp = 12, dmg = 4, mana = 40, status) {
        super(name, hp, dmg, mana, status);
    }
    specialAttak() {
        console.log("Dark Vision")
        victime.hp = victime.hp - 5
        this.mana = this.mana - 20
    }

}
const fighter = new Fighter("Grace")