class Fighter extends Character {
    constructor(name, hp = 12, dmg = 4, mana = 40, status) {
        super(name, hp, dmg, mana, status);
    }
    specialAttack() {
        console.log("Dark Vision");
        this.dmg = 5;
        this.mana = this.mana - 20;
    }

}
const fighter = new Fighter("Grace");