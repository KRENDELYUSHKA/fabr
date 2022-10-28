var createObjects = new createObject();
var objects = [];
function object(ob1, ob2, result, result2) {
  this.name = result;
  this.desc = result2;
  this.nameObject = ob1;
  this.descObject = ob2;
}
function createObject() {
  this.create = function (ob1, ob2, result, result2) {
    return new object(ob1, ob2, result, result2);
  };
}
function print() {
  console.log("Объект:");
  console.log(this.nameObject + ": " + this.name);
  console.log(this.descObject + ": " + this.desc);
}
function createObj() {
  var ob1 = prompt("Введите 1 объект");
  var ob2 = prompt("Введите 2 объект");
  var result = prompt("Введите " + ob1);
  var result2 = prompt("Введите " + ob2);
  alert("Объект создан - " + ob1 + ": " + result + ", " + ob2 + ": " + result2);
  objects.push(createObjects.create(ob1, ob2, result, result2));
}
function displayInfo() {
  objects.forEach((vehicle) => {
    print.call(vehicle);
  });
}
