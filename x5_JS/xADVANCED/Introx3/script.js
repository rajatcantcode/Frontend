//prototypal inheritance
// We create object and hum kisi ek parent constructor function ke prototype mein kuch add kar dete hain
// & jab bhi add hota hain to wo parents se milne waale sabhi children instances ko woh properties jo parent
// ko prototype mein di gyi thi wo milti hain

function makeHuman(name, age) {
  this.name = name;
  this.age = age;
  this.printmyname = function () {
    //PROBLEM This will get printed in every element but we don't want this
    // like this {name: 'Rajat', age: 25, printmyname: ƒ}
    //                                           ☝🏿
    console.log(this.name);
  };
}
const human1 = new makeHuman("Rajat", 25);
//{name: 'Rajat', age: 25, printmyname: ƒ}

// human1.printmyname();

/*---------------------------------------------------------------------------------- */
function makeHuman2(name, age) {
  this.name = name;
  this.age = age;
}

makeHuman2.prototype.anynewproperty = function () {
  console.log(this.name);
};
const human2 = new makeHuman2("Rajat", 5);

human2.anynewproperty();
