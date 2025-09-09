const logMultTable = (rows, cols) => {
    for(let i = 1; i<=rows; i++){
        let row = ''
        for(let j = 1; j<=cols; j++){
            row = row + i*j + ' '
        }
        console.log(row)
    }
}

const getRoleStr = (mode) => {
    let role = ''
    switch(mode){
        case 0: role = 'guest'; break;
        case 1: role = 'user'; break;
        case 2: role = 'moderator'; break;
        case 3: role = 'admin'; break;
        case 4: role = 'GOD'; break;
    }
    console.log(role)
}

const getCrows = (count) => {
    for (let i = 1; i <= count; i++){
        let suffix = ''
        const i100 = i%100
        const i10 = i%10
        if( !(i100 >= 11 && i100 <= 14) ) {
            if(i10 === 1){
                suffix = suffix + 'а' //тоже самое будет через suffix += 'a'
            }

            if(i10>=2 && i10<=4){
                suffix += 'ы'
            }
        }

        console.log('На ветке сидело ' + i + ' ворон' + suffix)
    }
}

const power = (num, exp) => {
    let res = 1

    for(let i = 0; i<exp; i++){
        res = res * num
    }
    console.log(res)
}

const getFizzBuzz = (count) => {
    for(let i = 1; i<=count; i++){
        let res = ''

        if(i%3 === 0){
            res =  res + 'fizz'
        }

        if(i%5 === 0){
            res = res + 'buzz'
        }

        console.log(i + ' ' + res)
    }
}

const showRange = (from, to) => {
    for(let i = from; i<=to; i++){
        console.log(i)
    }
}














