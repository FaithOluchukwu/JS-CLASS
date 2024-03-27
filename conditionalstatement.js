
  // conditional statement are used to perform different actions for different decision 
            // 3 conditional statement are If statement, Else If statment, and Else statement
            // keywords are reserved word in javascript
            // after your if statement in  () a bracket add your condition then {} add your expression
    // || means or pipe sign,  && is and sign

const originalScore = 150

// const firstExam = 30 //50
// const secondExam = 50 //50
// const thirdExam = 150 //150

const firstExam = Number(prompt('Enter First Exam Score'))
const secondExam = Number(prompt('Enter Second Exam Score'))
const thirdExam = Number(prompt('Enter Third Exam Score'))

const userScore = firstExam + secondExam + thirdExam

if(userscore <= 50){
    console.log(`user Score is: ${userScore} and you failed`)
}

else if( userScore > 50 && userScore <= 100){
    console.log(`user Score is: ${userScore} and you pass`)
}

else if(userScore > 100){
    console.log(`user Score is: ${userScore} Excelent and you pass`)
}


