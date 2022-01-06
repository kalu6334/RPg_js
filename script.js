class Character {
    constructor(name, hp, dmg, mana, status = "playing") {
        // Properties
        this.name = name;
        this.dmg = dmg;
        this.mana = mana;
        this.hp = hp;
        this.status = status;

        // Methodes
        this.fight = function(character) {
            console.log(`${this.name} attack ${character.name} `);
            character.hp = character.hp - this.dmg;
            alert(character.name + " has " + character.hp + " life left");
            console.log(`${character.name} a ${character.hp} de vie`)
        };
    }
}
var fighter = new Character("Grace", 12, 4, 40)
var paladin = new Character("Ulder", 16, 3, 160)
var monk = new Character("Moana")
var berserker = new Character("Draven")
var assassin = new Character("Carl")


thor.fight(zeus);
zeus.fight(thor);

class Wizzard {
    constructor(name, attack, defense, health, mana) {
        // Properties
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
        this.mana = mana;

        // Methodes
        this.fight = function(warrior) {
            alert(this.name + " attacks " + warrior.name);
            warrior.health = warrior.health - this.attack;
            alert(warrior.name + " has " + warrior.health + " life left");
        };
        this.heal = function() {
            if (this.mana > 10) {
                alert(this.name + " try to heal himself ");
                this.health += 10;
                this.mana -= 10;
                alert(this.name + " has now " + this.health);
            } else {
                alert("Not enough mana");
            }
        };
    }
}

var Gandalf = new Wizzard("Gandalf", 30, 40, 250, 40);

thor.fight(Gandalf);
zeus.fight(Gandalf);
Gandalf.heal();
Gandalf.fight(thor);