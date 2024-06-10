const name = 'Stephen Odiase is a boy';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
console.log(name.split(', '));

console.log('My ' +name+ ' Im ' + age)
const hi = `My ${name} Obi, I'm ${age} old`

console.log(hi)

function Person(firstName, lastName, dob){
    this.stephen = firstName;
    this.odiase = lastName;
    this.dad = new Date(dob);
}

const person1 = new Person('Solomon', 'Oby', 1-7-93);
const person2 = new Person('Stella', 'Anthonia', 17-11-91);

console.log(person2.dad.getFullYear());