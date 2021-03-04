'use strict';

function lernJS (lang,callback) {
	console.log(`Я учу ${lang}`);
	callback();
}

	lernJS ('JavaScript', function (){
		console.log('Я прошёл этот урок');
	});
