class Zombie {
    constructor(row,column,parentTile,zombieType){
        this.row = row;
        this.column = column;
        this.parentTile = parentTile;
        this.type = zombieType;
        this.health = zombieType.health;

        this.creatZombie()
    }

    creatZombie() {
        const zombieEl = document.createElement("div");
        zombieEl.className = this.type.zombieCharacterName;

        
    }
}