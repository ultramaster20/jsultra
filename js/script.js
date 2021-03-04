'use strict';

const options ={
	a: "b",
	c: 8,
	d: {
		e: "f",
		h: 9,
	},
	makeTest: function () {
		console.log("TEST");
	}
};

options.makeTest();
const {e, f} = options.d;
console.log(e);

console.log(Object.keys(options).length);



let counter =0;

for (let key in options) {
	if (typeof(options[key]) === 'object') {
		for (let i in options[key]) {
		console.log (`Свойство ${i} имеет значение ${options[key][i]}`);
		counter++;
	} 
} else{
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
		counter++;
	}
}

console.log(counter);
