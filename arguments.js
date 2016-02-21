function myFunc(){
	var x= 0;
	for (var i = 0; i < arguments.length; i++) {
		x = x + arguments[i];
	};
	return x;
}

console.log(myFunc());
console.log(myFunc(1));
console.log(myFunc(1,2));
console.log(myFunc(1,2,3));