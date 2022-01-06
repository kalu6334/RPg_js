class Character {
    constructor(name, hp, dmg, mana, status = "playing") {
        this.hp = hp
        this.dmg = dmg
        this.mana = mana
        this.status = status
        this.name = name
    }

    takeDamage = (damage) => {
        if (this.hp > 0) {
            this.hp = this.hp - damage;
        } else {
            console.log(`${this.name} vous etes mort`);
        }
    }

    dealDamage = (victime) => {
        if (this.dmg > victime.hp) {
            this.mana = this.mana + 20;
            console.log(`${this.name} vous gagnez 20 mana pour avoir tué ${victime.name}!`)
        }
        if (this.status != "loser") {
            console.log(victime)
            victime.takeDamage(this.dmg);
            console.log(`Le joueur ${this.name} attaque le joueur ${victime.name} et cause ${this.dmg} dommages !`)
            console.log(victime.name + " a désormais " + victime.hp + " HP !")
        }
    }
}