let variableLocal = 200;
var variableglobal = 100;
variableglobal = "Hello";
console.log(variableglobal);

// base prototype called object
const newObject = {
  prop1: "Ricardo",
  prop2: "Completed",
  method1: function (param1) {
    console.log(param1);
  },
};

console.log(newObject);
console.log(newObject.prop1);
console.log(newObject.prop2);
console.log(newObject.method1);

// Prototype: constructor
function Student(student_name, course, lunch) {
  this.prop1 = student_name;
  this.prop2 = course;
  this.prop3 = lunch;
  this.method1 = function () {
    console.log(param1);
  };
}

const student_morning = new Student("Ricardo", "comp3123", "burger");
console.log(student_morning);
console.log(student_morning.prop1);
console.log(student_morning.prop2);
student_morning.method1(student_morning.prop3);

// Prototypes: Add a method After/in another file
// to give more capabilities to the prototype
Student.prototype.prop4 = "hard-coded value";
Student.prototype.method2 = function (param1) {
  return param1;
};

console.log(student_morning.prop4);
console.log(student_morning.method2("chow main"));

// Class
class Prof {
  constructor(prof_name_p) {
    this.prof_name = prof_name_p;
  }
  method1(param1) {
    return param1;
  }
}

const morning_prof = new Prof("Laily");
