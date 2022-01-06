class Game {
    constructor(turnLeft = 10, joueurs = [Assassin, Berserker, Paladin, Monk, Fighter]) {
        this.turnLeft = turnLeft;
        this.joueurs = joueurs;
    }
    newTurn = () => {
        this.turnleft = this.turnleft - 1
        if (this.turnleft = 0) {
            console.log('la partie est terminer')
            if (joueurs.hp > 0) {
                joueurs.status = "winer"
            }
        }
    }

}