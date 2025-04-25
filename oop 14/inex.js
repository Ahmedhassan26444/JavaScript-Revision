// constructor function: uses `this` only
function User(name) {
  this.name = name; // instance property
  this.greet = function () {
    // own method on each instance
    console.log(`Hello, ${this.name}!`);
  };
}
// usage
const user2 = new User("Eve");
user2.greet(); // Hello, Eve!

// factory function: without `this`
function createUser(name) {
  // `name` lives in the closure
  return {
    name,
    greet() {
      console.log(`Hello, ${name}!`);
    },
  };
}

// usage
const user1 = createUser("Eve");
user1.greet(); // Hello, Eve!
