var Parent = function() {
    this.parentName = "Parent";
}

var Child = function() {
    this.childName = "Child"
}

Child.prototype = new Parent()

var childObj = new Child();

console.log(childObj.parentName);
console.log(childObj.childName);
console.log(childObj.newProperty); // undefined

Parent.prototype.newProperty = "New Property"

Parent.prototype.newFunction = function() {
    return this.parentName + " " + this.newProperty;
};

// As only we update Parent with new properties or functions
// Child will have access to them
console.log(childObj.newProperty);
console.log(childObj.newFunction());


Child.prototype.childNewFunction = function() {
    return this.childName + " " + this.newProperty;
};

console.log(childObj.childNewFunction());