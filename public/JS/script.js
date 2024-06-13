const btn = document.getElementById('btn');
btn.onclick = function () {
  const name = prompt('Enter your full name.');
  document.getElementById('name').innerText = name;
}


// Variables
const pi = 3.142;
let username = 'Elorm';
let age = 32;
let present = false;

// objects
const person = {
  username: 'Elorm',
  age: 32,
  present: false,
  child: {
    name: 'Asha',
    friend: {
      name: 'Farrah',
    }
  }

}

console.log(person.username);
person.age = 34;
console.log(person);
person.child.friend.name = 'Abena';
console.log(person.child.friend.name)


//Arrays
const bottle1 = {
  size: 'large',
  color: 'yellow'
}

const bottle2 = {
  size: 'small',
  color: 'blue'
}



const bottles = [bottle1, bottle2];
bottles;
bottles.push(bottle1);
bottles.push(bottle2);
bottles;
bottles[0].size;

const date = new Date();
date.getDay();

// If/Else
// const age = 18;
if (age >= 18) {
  'You are true'
} else {
  'You are false'
}

//For Loop
for (let i = 0; i <= 5; i += 1) {
  console.log('We did it', i)
}

// Write a function that will add a participant to our google classroom.

const participants = [];
function addParticipant(email) {
  //check if email was provided
  //(!email) used to say (if not) shorter version of what is written below
  if (email === undefined || email === null) {
    return "No email provided";
  }
  //Check if email if valid
  if (!email.includes("@")) {
    return "Invalid email provided";
  }
  //Add email to participants
  participants.push(email);
  return "Participant added";
}

addParticipant("doreenwuaku@gmail.com");
addParticipant("doreenwuaku@yahoo.com");
addParticipant();
addParticipant("doreenwuaku");
participants;





//Arrays in JavaScript
const users = [
  {
    username: 'yakadee',
    password: '1234',
    email: 'yakadee@outlook.com'
  },
  {
    username: 'yakadeera',
    password: '12345',
    email: 'yakadeera@yahoo.com'
  },
];
// New Array
// replace the box brackets with new Array ()



// String Method

let fullName = "elorm ackwerh"
fullName.length
fullName.toUpperCase()
fullName.toLowerCase()
fullName.charAt(3)
fullName.slice(6, 13)
fullName.split("")
fullName.replace("ackwerh", "wuaku")
fullName.indexOf("lor")

//string conversion
Number("3.243")
parseInt("3.243")
parseFloat("3.243")
let amount = 18000
console.log(`GHS${amount}`)
amount.toString()


//Write a function that will allow a user to reset their password
//const user = {
// email: "mickeymond@yahoo.com",
//   password: "1234"
// }


function resetPassword(email, newPassword) {
  //Check if email and new password was provided
  if (!email || !newPassword) {
    return 'Email or password not provided';
  }
  //Check if provided email is correct
  if (email !== user.email) {
    return 'Incorrect email';
  }
  //Update password with new one
  user.password = newPassword;
  return 'Password reset succesful';
}

user;
resetPassword('mickeymond@yahoo.com', '0987')
user;

// You have been given an array of students with some of them marked as absent and others marked as present.
// Write a function that will return the total number of students present
const students = [
  {id: 1, present: false},
  {id: 2, present: true},
  {id: 3, present: false},
  {id: 4, present: true},
  {id: 5, present: false},
]

function studentsPresent(students){
  //Define a variable to track the total present
 let total = 0;
  //Begin a loop
  for (let i = 0; i < students.length; i++){
    // For any iteration if student is present then increase total present by 1;
    if(students[i].present === true) {
      total++;
    }
  }
  return total
}

studentsPresent(students)

//Classes in Javascript
class Laptop {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}

const laptop1 = new Laptop('Dell', 'black');
const laptop2 = new Laptop('HP', 'silver');
laptop1.brand;
laptop2.brand;















