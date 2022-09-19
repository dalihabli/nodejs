var generator = require('generate-password');

var passwords = generator.generateMultiple(4, {
	length: 10,
	uppercase: false,
    strict: true
});

console.log(passwords);