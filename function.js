// javascript function is a block of code designed to perform a specific task which means it is an independent element. 
// you cant same functio name but can use same parameters name
// when you create a function there is need to invoke it less it wont work
// coliberate {} is where you write logic outside object and object uses this as well
// square bracket[] are used for Object
// parenthesis () are used for arrays



// Native Function

function addition(){
    console.log(2+2)
}
// Function call. make sure to always invoke or call your fucntion
addition()

// to create arrow function create it as a variable
// what makes it an arrow function is the parenthesis() and arrow sign =>

const addition2 =() =>{
    console.log(2+6)
}
addition2(40, 60)

                // Augument and Parameters

// Paremeters  are instant variables you delcare when creating a function. 
// THey are declared inside a function eg function addition(num1, num2), num 1 and num2 are parameters
// you cant declare one function where you have two parameters
// Augument are values you assigned to parameters(Paremeters  are instant variables you delcare when creating a function)
// augument are the declared function from the parameters
// variable keywords let, const

    function addition(num1, num2, num3) {
        console.log(num1 + num2 + num3)
        
     }
     addition(20 + 30 + 20)

            // Return keyword or Statement
// In a real life Project, you will have to return your result. USe const and gives your variable result 
        function addition(num1, num2, num3){
            const result = num1 + num2 + num3
        return result;
        }
        console.log(addition(20, 20,30))


        // prompt

         function addition3(num1, num2, num3){
            const result = num1 + num2 + num3
        return result;
        }
                        // Function Call
            console.log(
                addition3(
                    Number(prompt("Enter number1")),
                    Number(prompt("Enter number1")),
                    Number(prompt("Enter number1"))
                )
            )

          