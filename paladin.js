class Paladin extends Character {
    constructor(name, hp = 16, dmg = 3, mana = 160, status) {
        super(name, hp, dmg, mana, status);
    }
    specialAttak() {
        console.log("Healing Lighting")
        victime.hp = victime.hp - 4
        this.hp = this.hp + 5
        this.mana = this.mana - 40
    }

}
const paladin = new Paladin("Ulder")