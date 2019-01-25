/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding - within the global context, this is bound to the window only.
 * 2.  Implicit Binding - Left of the dot when invoked. When an object is invoked in this scope, you know what "this" is pointing to by referencing the object the left of the dot.
 * 3. New Binding - when using the new keyword, this is bound to the new object that is created.
 * 4. Explicit Binding - By using .call or .apply, we can change the object being referenced. Thus, changing the this pointer as well.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function sayJordan() {
  console.log(this);
  return "Jordan";
}
sayJordan();

// Principle 2

// code example for Implicit Binding

const shoe = {
  name: "shoe",
  shoeSentence: function() {
    return `this is a ${this.name}`;
  }
};

console.log(shoe.shoeSentence());

// Principle 3

// code example for New Binding

function Pokemon(name, attack) {
  this.name = name;
  this.attack = attack;
  this.speak = function() {
    return `${this.name}  attacks with ${this.attack}.`;
  };
}

const Pikachu = new Pokemon("Pikachu", "Thunder");
const Squirtle = new Pokemon("Squirtle", "Surf");

console.log(Pikachu.speak());
console.log(Squirtle.speak());

// Principle 4

// code example for Explicit Binding

function sayGoodBye() {
  return `Bye. See you later ${this.name}.`;
}

console.log(sayGoodBye.call({ name: "Jordan" }));
