const str="Hello World";

console.log(`Length: ${str.length}`); //length is property
console.log(`Character at Index 3 ${str.charAt(6)}`);
console.log(`StartsWith Hell? ${str.startsWith('Hell')}`);
console.log(`EndsWith Hell? ${str.endsWith('world')}`);
console.log(`Containes llo? ${str.includes('llo')}`);
console.log(`UpperCase: ${str.toUpperCase()}`);
console.log(`LowerCase: ${str.toLowerCase()}`);
console.log(`Split: ${str.split(' ')}`);
console.log(`Split: ${str.split('')}`);
console.log(`Split & Join: ${str.split('').join('-')}`);//join is the arrays function
console.log(`Slice: ${str.slice(0,5)}`);
console.log(`Slice: ${str.slice(6)}`);