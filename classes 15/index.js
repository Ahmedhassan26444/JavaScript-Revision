/*
class Animal {
    sound() {
      console.log("Animal makes a sound");
    }
  } 
  const myAnimal = new Animal();
  myAnimal.sound(); 
*/


/* 
class Animal {
    constructor(name) {
      this.name = name; // public property
    }
  
    speak() {  // public method
      console.log(`${this.name} makes a sound`);
    }
  }
  
  const dog = new Animal('jacky');
  dog.speak(); // Buddy makes a sound 
  */
 /*
  class Animal {
    #name; // private property
    
    constructor(name) {
      this.#name = name;
    }
  
    speak() {
      console.log(`${this.#name} makes a sound`);
    }
  }
  
  const dog = new Animal('Buddy');
  dog.speak(); // Buddy makes a sound
  // console.log(dog.#name); // ERROR! Cannot access private property.
  */

  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);  // calling the parent class constructor to initialize 'name'
      this.breed = breed;  // adding new property 'breed'
    }
  
    bark() {
      console.log(`${this.name} barks`);
    }
  }
  
  const myDog = new Dog('Rex', 'Golden Retriever');
  myDog.speak();  // Rex makes a sound
  myDog.bark();   // Rex barks
  