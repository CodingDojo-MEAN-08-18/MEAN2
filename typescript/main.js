let myString = 'a string';
myString = 'a different string';
const array = ['cat'];
array.push('some string');
array.push(234234);
// array.push({});
array.push(true);
const first = array[0];
const person = {
    firstName: 'Alice',
    lastName: 'Person'
};
person.firstName = 'Bob';
person.age = 23;
// function User(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
