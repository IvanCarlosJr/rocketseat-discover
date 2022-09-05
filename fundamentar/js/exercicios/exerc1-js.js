let nota = 83 
if(nota >= 90) {
    console.log('A')
} else if(nota < 90 && nota >= 80) {
    console.log('B')
} else if(nota < 80 && nota >= 70) {
    console.log('C')
} else if(nota < 70 && nota >= 60) {
    console.log('D')
} else {
    console.log('F')
}

// ou...

function getScore(score) {
    
    let scoreA = score >=90 && score <= 100
    let scoreB = score >=80 && score < 90
    let scoreC = score >=70 && score < 80
    let scoreD = score >=60 && score < 70 
    let scoreF = score < 60 && score >= 0

    let scoreFinal; 

    if (scoreA) {
        scoreFinal = 'A'
    } else if (scoreB) {
        scoreFinal = 'B'
    } else if (scoreC) {
        scoreFinal = 'C'
    } else if (scoreD) {
        scoreFinal = 'D'
    } else if (scoreF) {
        scoreFinal = 'F'
    } else {
        scoreFinal = 'Score inválido'
    }
    return scoreFinal
}

console.log(getScore(100))
console.log(getScore(94))
console.log(getScore(83))
console.log(getScore(75))
console.log(getScore(62))
console.log(getScore(49))
console.log(getScore(0))