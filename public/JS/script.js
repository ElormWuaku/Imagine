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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  