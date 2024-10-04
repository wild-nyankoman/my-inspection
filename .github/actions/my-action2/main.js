
console.log('test');

const f = new Function('value', `
   console.log(value);
   return value * 2 
`);

console.log(f(10));
