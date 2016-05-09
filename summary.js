for(name in object){
    if(object.hasOwnProperty(name)){
    ...
    }
}

str = num.toString();
str = String(num);

num = Number(str);
num = +str;

parseInt(str, 10);
parseInt('08') === 0;
parseInt('08',10) === 8;

myList = ['oats','peas','beans'];
myList[myList.lenght] = 'barley';

myArray = ['a', 'b', 'c', 'd']
delete myArray[1];
// ['a', underfined, 'c', 'd']
myArray.splice(1, 1);
// ['a', 'c', 'd']