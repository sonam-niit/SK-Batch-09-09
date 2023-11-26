let pat= /[A-Za-z0-9]at/;

console.log(pat.test('ABat'));
console.log(pat.test('Bbat'));
console.log(pat.test('Cat'));

console.log(pat.test('rat'));

console.log(pat.test('3Aat'));
console.log(pat.test('3A'));
