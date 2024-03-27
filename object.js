// an object work very well with key and value pair


// const myDetails ={
//     name : '',
//     age: '',
//     gender: '',
//     bio: 'I am a good girl',
// }

// let name = prompt(" Enter your name:")
// let age = prompt(" Enter your age:")
// let gender = prompt(" Enter your gender:")

// myDetails.name = name
// myDetails.gender = gender
// myDetails.age = age

// console.log(`My name is ${myDetails.name} am a ${myDetails.gender} I am ${myDetails.age}`);


// extract id 2 , question and answer 2 from the question array
//           extra user(id) value and also  phone number  

          const anonymousDetail ={
            id: '',
            skills: '',
            questions: [
                {
                    id: 1,
                    question: "How much is my rate",
                    answer: "My rate is quite good"
                },
                {
                    id: 2,
                    question: "When can i deliver",
                    answer: "I deliver like hebrew women 😊😂"
                }
            ],
            phone_number: "08094422807",
            user: "8cbf6f38-d5b6-4433-8030-b467cc19e86f",
            digital_skills: null,
            work_type: "",
            verified: false,
        }       

        const id2Question = anonymousDetail.questions[1].question;
        const id2Answer = anonymousDetail.questions[1].answer;
        const userId = anonymousDetail.user;
        const phoneNumber = anonymousDetail.phone_number;
        
        console.log("Question 2:", id2Question);
        console.log("Answer 2:", id2Answer);
        console.log("User ID:", userId);
        console.log("Phone Number:", phoneNumber);
        
        