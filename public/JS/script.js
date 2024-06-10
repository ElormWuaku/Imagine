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
    username:'Elorm',
    age: 32,
    present: false,
    child:{
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
  if (age >= 18){
    'You are true'
  } else {
    'You are false'
  }
  
  //For Loop
  for (let i = 0; i <= 5; i+=1) {
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
fullName.slice(6,13)
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  