function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// ---------------------------------------------------------------------------//
let bibaHp = 100
let bobaHp = 100

const bibaName = 'Биба'
const bobaName = 'Боба'

const weaponOneMinDamage = 5
const weaponOneMaxDamage = 10
const weaponOneChance = 10

const weaponTwoMinDamage = 50
const weaponTwoMaxDamage = 100
const weaponTwoChance = 19
// ---------------------------------------------------------------------------//
const attack = (minDam, maxDam, chance, targetName, isShenbao) => {
    if(targetName === bibaName && bibaHp <= 0 || targetName === bobaName && bobaHp <=0){
        console.log('Оставь его, он мёртв.')
        return
    }
// ---------------------------------------------------------------------------//
    const isSuccess = rand(1, 20) >= chance
    if(isSuccess){
        let damage
        if(isShenbao){
            const shenbaoDam = rand(0, 1)
            if(shenbaoDam){
                damage = maxDam
            } else {
                damage = minDam
            }
        } else {
            damage = rand(minDam, maxDam)
        }
// ---------------------------------------------------------------------------//
        if(targetName === bibaName){
            bibaHp = bibaHp - damage
            console.log(`${bibaName} получилил ${damage} урона. Осталось ${bibaHp} HP.`)
        }
        if (bibaHp <= 0){
            console.log('Биба R.I.P')
        }
        if(targetName === bobaName){
            bobaHp = bobaHp - damage
            console.log(`${bobaName} получилил ${damage} урона. Осталось ${bobaHp} HP.`)
        }
        if (bobaHp <= 0){
            console.log('Боба R.I.P')
        }
    } else {
        if(targetName === bibaName){
            console.log(bobaName + ' промахнулся')
        } else{
            console.log(bibaName + ' промахнулся')
        }   
    }
}
// ---------------------------------------------------------------------------//
const БибаБьетПервымОружием = () => {
    attack(weaponOneMinDamage, weaponOneMaxDamage, weaponOneChance, bobaName, false)
}
const БибаБьетВторымОружием = () => {
    attack(weaponTwoMinDamage, weaponTwoMaxDamage, weaponTwoChance, bobaName, true)
}
const БобаБьетПервымОружием = () => {
    attack(weaponOneMinDamage, weaponOneMaxDamage, weaponOneChance, bibaName, false)
}
const БобаБьетВторымОружием = () => {
    attack(weaponTwoMinDamage, weaponTwoMaxDamage, weaponTwoChance, bibaName, true)
}
// ---------------------------------------------------------------------------//
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



















