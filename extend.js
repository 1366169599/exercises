function Parent(name,age) {
    this.name = name;
    this.age = age;
    this.ttt = 123;
}
Parent.prototype.sayName = function () {
    console.log('parent name:', this.name);
}

function Child(name, age) {
    Parent.call(this, name, age);
    this.sb='sb'
}

var a = new Child('xiaoming', 12)
console.log(a.name)
console.log(a.age)
console.log(a.ttt)
console.log(a.sb)

var p = new Parent('xiaoming', 12)

function create(proto) {
    function F() {}
    F.prototype = proto;
    return new F();
}
Child.prototype = create(Parent.prototype);


Child.prototype.sayName = function () {
    console.log('child name:', this.name);
}
Child.prototype.constructor = Child;

var parent = new Parent('father');
parent.sayName(); // parent name: father

var child = new Child('son', 'father');
