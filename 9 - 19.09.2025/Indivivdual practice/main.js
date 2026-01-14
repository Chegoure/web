function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// ---------------------------------------------------------------------------//
const weaponOne = {
    minDamage: 5,
    maxDamage: 10,
    hitChance: 10,
    getDamage(){ // <--- getDamage - определяет урон.
        return rand(this.minDamage, this.maxDamage)
    },
    hit(){ // <--- hit - определяет попадание.
        if(rand(0, 20) >= this.hitChance){ 
            return this.getDamage()
        }else {
            return false
        }
    }
}

const weaponTwo = {
    minDamage: 50,
    maxDamage: 100,
    hitChance: 19,
    getDamage(){ // <--- getDamage - определяет урон.
        if(rand(0, 1)){ 
            return this.maxDamage
        } else{
            return false
        }
    },
    hit(){ // <--- hit - определяет попадание.
        if(rand(0, 20) >= this.hitChance){ 
            return this.getDamage()
        } else{
            return false
        }
    }
}

const getPlayer = (name, health, weapon) => {
    return {
        name: name,
        health: health,
        weapon: weapon,
        attack(target){
            const damage = this.weapon.hit()
            if(damage){
                target.health -= damage
                console.log(`${this.name} нанёс ${damage} игроку ${target.name}. У ${target.name} осталось ${target.health} hp.`)
            }else{
                console.log(`${this.name} промахнулся.`)
            }
        }
    }
}

const playerOne = getPlayer('Петя', 100, weaponOne)
const playerTwo = getPlayer('Вася', 100, weaponOne)

playerOne.attack(playerTwo)