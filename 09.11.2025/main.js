function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let biba = 100
const bibaName = 'biba'
let boba = 100
const bobaName = 'boba'

const weaponOneMinDamage = 5
const weaponOneMaxDamage = 10
const weaponOneChance = 10

const weaponTwoMinDamage = 50
const weaponTwoMaxDamage = 100
const weaponTwoChance = 19

const attack = (abuser, minDam, maxDam, chance, targetName, isShenbao) => {
    if(targetName === 'biba' && biba <=0 ||targetName === 'boba' && boba <=0){
        console.log('Не бей лежачего.')
        return
    }

    const isSuccess = rand(1, 20) >= chance
    if(isSuccess){
        let damage
        if(isShenbao){
            const crit = rand(0,1)
            if(crit){
                damage = maxDam
            } else {
                damage = minDam
            }
        } else {
            damage = rand(minDam, maxDam)
        }


        if(targetName === 'biba'){
            biba = biba - damage
            console.log('Биба получил ' + damage + ' урона. Осталось ' + biba + ' hp.' )
            if(biba <= 0){
                console.log('Биба R.I.P')
            }
        } else {
            boba = boba - damage
            console.log('Боба получил ' + damage + ' урона. Осталось ' + boba + ' hp.' )
            if(boba <= 0){
                console.log('Боба R.I.P')
            }
        }


    } else {
        console.log('Промах')
    }
}


const bibaAttackWeaponOne = () => {
    attack(bibaName, weaponOneMinDamage, weaponOneMaxDamage, weaponOneChance, bobaName, false)
}
const bibaAttackWeaponTwo = () => {
    attack(bibaName, weaponTwoMinDamage, weaponTwoMaxDamage, weaponTwoChance, bobaName, true)
}
const bobaAttackWeaponOne = () => {
    attack(bobaName, weaponOneMinDamage, weaponOneMaxDamage, weaponOneChance, bibaName, false)
}
const bobaAttackWeaponTwo = () => {
    attack(bobaName, weaponTwoMinDamage, weaponTwoMaxDamage, weaponTwoChance, bibaName, true)
}


// setInterval(() => {
//     if(rand(0,1)){
//         bobaAttackWeaponOne()
//     } else{
//         bobaAttackWeaponTwo()
//     }
// }, 1000)
//
// setInterval(() => {
//     if(rand(0,1)){
//         bibaAttackWeaponOne()
//     } else{
//         bibaAttackWeaponTwo()
//     }
// }, 1000)



















