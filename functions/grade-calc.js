// student score, total possible score
// 15/20 -. You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const getStudentGrade = function (name = 'Unknown', mark, total) {
    if (typeof name !== 'string' || typeof mark !== 'number' || typeof total !== 'number') {
        throw Error('Please provide numbers only')
    }

    const grade = (mark/total) * 100
    let letterGrade = ''

    if (grade >= 0 && grade <= 59) {
        letterGrade = 'F'
    } else if (grade >= 60 && grade <= 69) {
        letterGrade = 'D'
    } else if (grade >= 70 && grade <= 79) {
        letterGrade = 'C'
    } else if (grade >= 80 && grade <= 89) {
        letterGrade = 'B'
    } else if (grade >= 90 && grade <= 100) {
        letterGrade = 'A'
    } else {
        letterGrade = 'unknown'
    }
    
    if (letterGrade == 'A' || letterGrade == 'F') {
        return `${name} got an ${letterGrade} (${grade})!`
    } else if (letterGrade == 'B' || letterGrade == 'C' || letterGrade == 'D') {
        return `${name} got a ${letterGrade} (${grade})!`
    } else {
        return 'Grade unknown'
    }
}

try {
    const studentsGrade = getStudentGrade('Jack', true, 25)
    console.log(studentsGrade)
} catch (e) {
    console.log(e.message)
}
