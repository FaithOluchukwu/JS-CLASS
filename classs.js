// create a system to ask user for 
// 1. name
// 2. gender
// 3. age

//a. and validate if the user gender is male and he
// is less than18 or greater than 40


// he should  be bounced out of the show with angry 
// emoji 

// b validate if the user gender is female and she is 
// is less than 18 or greater than 40

// she should be bounce out of the show with angry 
//emoji 😒

const name = prompt('Enter name')
const gender = prompt('male or female')
const age = prompt('age')




if(gender === 'male'){
    if(age <18 || age > 40)
    
    console.log('Get out male😒')

    else if( age >= 18 || age <= 40)
    console.log('welcome for male😊')
}

else if(gender === 'female'){
    if (age < 17 || age >39)
    console.log('get out for female😒')

    if( age >= 17 || age <= 39)
    console.log('welcome for female😊')
}



// else if( gender == 'female' && age > 17 && age <= 39){
//     console.log('welcome to the show 😊')
// }

// else {
//     console.log('Dont come in 😒')
// }

// // switch(prompt('name')){
//     case 'name':
//         alert(`are you ${male || female }`)
//         //code block
//         break;
        
//         case '+' :
//             alert(2+1)
//             // code block
//             break;
            
//             case '/':
//                 alert(2/1)
//                 //code block
//                 break;
//                 default:
//                     alert(2)
// }
