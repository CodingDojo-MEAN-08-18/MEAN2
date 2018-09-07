let myString: string = 'a string';

myString = 'a different string';

const array: Array<boolNumStr> = ['cat'];


array.push('some string');
array.push(234234);
// array.push({});

array.push(true);

type boolNumStr = boolean | string | number;

const first: string = array[0] as string;


const person: Person = {
  firstName: 'Alice',
  lastName: 'Person'
};

person.firstName = 'Bob';

interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

person.age = 23;

// function User(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

class User implements Person {
  constructor(public firstName: string, public lastName: string) {
  }

  protected sayHello() {
    console.log(`Hello ${this.firstName}`);
  }
}


const user = new User('Alice', 'Person');


class User2 extends User {
  constructor(firstName: string, lastName: string, public age: number) {
    super(firstName, lastName);

    this.sayHello()
  }
}


const user2 = new User2('Bob', 'Bob', 99);
// user2.sayHello();


function map<T, TResult>(array: T[], callback: (element: T, index: number, array: T[]) => TResult): TResult[] {
  const results: TResult[] = [];

  for (let index = 0; index < array.length; index++) {
    const cotent = callback(array[index], index, array);
    results.push(cotent);
  }

  return results;
}


const stringArray = ['cat', 'dog', '34', 'fish'];
const numArray = [9999, 234, 324, 7456];

const res = map(stringArray, (element, _index) => {
  return element + ' this is a mapped string ';
});

const rez = map(numArray, (num1, num2) => '' + num1 + num2);

