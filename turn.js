class Turn {
    constructor(turnLeft, joueurs) {
        this.turnLeft = turnLeft
        this.joueurs = joueurs
    }
    startTurn = () => {
        const players = new.player[Fighter, Paladin, Monk, Berserker, Assassin]

        console.log(`Tour numero ${this.turnLeft}`)
        console.log(`C'est a ${this.name} de jouer`)
        console.log('attquer normal ou coup spécial ?')
        console.log(`${this.name} attaque ${this.victime.name} avec ${this.dmg} de degat.`)
        if (this.joueurs.hp > 0) {
            console.log(`il reste ${this.joueurs.name }`)
        }
    }
}