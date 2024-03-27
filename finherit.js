// using one function to collect series of data and pass it on to another function
// first create a function and call it 
// get another function to pass it


const myDetails = (fName, lName, age) => {
    return[fName, lName, age]

};


// const myNewDetails = myDetails('Faith', 'Chukwu', '26');
const myNewDetails = myDetails (
    (prompt("Enter your first name")),
    (prompt("Enter your last name")),
    (prompt("Enter your age")),
)


const processDetails =(message1, message2, message3) =>{
    return `${message1} ${myNewDetails[0]} ${myNewDetails[1]} ${message2} ${message3} ${myNewDetails[2]}`
};
console.log(processDetails('My name is : ', 'I am ' , 'years old'));

