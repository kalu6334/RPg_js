class Assassin extends Character {
    constructor(name, hp = 6, dmg = 6, mana = 20, status) {
        super(name, hp, dmg, mana, status);
    }
    specialAttak() {
        console.log("Shadow hit")
        this.dmg = 7
        this.mana = this.mana - 20
    }

}
const assassin = new Assassin("Carl")