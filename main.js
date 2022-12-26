// - closure -----------------------------
// when we return a function in javascript then that returned function has the
// access to the scope of it's parent function and that scope is stored in the
// memory.
// So even if the parent function has been executed, the returned function
// still has the access to the parent functions scope.

// - currying ---------------------------
// it is a way of transforming a function that takes multiple arguments into a
// sequence of nested functions where each function takes one argument at a time.

// - this ------------------------------

// - implicit binding --------------------------
const obj = {
  name: "Harry",
  sayMyName: function () {
    console.log(`My name is ${this.name}`); // here this referes to the object itself
  },
};

obj.sayMyName();

// - explicit binding --------------------------
const person = {
  name: "Louis",
};
function sayMyName2() {
  console.log(`My name is ${this.name}`);
}

sayMyName2.call(person); // here we are binding this to person object

// - new binding -----------------------
function sayMyName3(name) {
  this.name = name; // initializing this constructor function with 'new' will allocate this = {}
}

const fn = new sayMyName3("Zayn");
console.log(fn.name);

// - default binding --------------------
globalThis.name = "Niall";
function sayMyName4() {
  console.log(this.name); // here this will bind with global object and will take the global name
}
sayMyName4();

// - prototype inheritence ---------------------

function Human(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}
Human.prototype.getFullName = function () {
  console.log(`${this.fname} ${this.lname}`);
};

const h1 = new Human("John", "Cena");
h1.getFullName();

function Singer(genre, fname, lname) {
  Human.call(this, fname, lname);
  this.genre = genre;
}
Singer.prototype = Object.create(Human.prototype);
Singer.prototype.constructor = Singer;

const s1 = new Singer("Pop", "Justin", "Bieber");
console.log(s1.constructor);

class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  logFullName() {
    console.log(`${this.fname} ${this.lname}`);
  }
}

const p1 = new Person("Hero", "Singh");
p1.logFullName();

class SocialLinks extends Person {
  constructor(fname, lname, link1) {
    super(fname, lname);
    this.link1 = link1;
  }
}

const sl1 = new SocialLinks("Sam", "Shukla", "https://sam-tests.com");
console.log(sl1);
sl1.logFullName();
