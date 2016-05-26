var obj1 = {
    val: 'Value of obj1',
    printVal: function () {
        console.log(this.val);
    }
};

var obj2 = {
    val: 'Value of obj2'
};

var print = obj1.printVal.bind(obj2);
print();