// array are collection of datas which includes Boolean, strings, number, also an array and can be acessed with index
// we create an array with square bracket
// we access value in array with index
// nested array is having array inside of another
// popping method removes the last element from an array, it returns the last element that was removed
// push method add element to the Array, it add element to the ending of the array

const details = [
    "Oluchukwu", 
    34, 
    "Female",
     "I am a programmer", 
     false, 
     [1,2,3,4, ["jude", [4,5,6], "female"]]
]
console.log(details[5] [4] [2])

const myVar = details[5][4][2]
console.log(myVar[3])

const myDetails = [
    "class One",
    ["no of students is : ", [1,2,3]],"class Two",
    [10, " my is positive :", false, true],"class Three",
    ["and is ", "my negative :", false, true ]
]
console.log(myDetails [1][0] + myDetails[3][0])
console.log(myDetails [3][1] + myDetails[3][3])
console.log(myDetails [5][0] + myDetails[5][1].slice(3, 13) + [false])


// popping method removes the last element from an array, it returns the last element that was removed
const fruits = [ "grape", "Mango", "banana", "Guava"]
console.log(fruits.pop())
fruits.push(['apple','strawberry','Lime'])
fruits[0] = 'grape'

console.log(fruits)





