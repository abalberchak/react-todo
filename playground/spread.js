// function add(a, b) {
// 	return a + b;
// }

// console.log(add(3,1));

// var toAdd = [9, 5];

// console.log(add(...toAdd));


var person = ['Andrew', 25];

var persontwo = ['Jen', 29];

function greet(name, age) {
	console.log("Hi " + name + ", you are " + age);
}

greet(...person);
greet(...persontwo);

var names = ['Mike', 'Ben'];

var final = ['Andrew', ...names];

final.forEach(function(name) {
	console.log('Hi ' + name);
})