/* write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers. */


function stringy(size) {
    let result = '1';
    for(i=1; i< size; i++)
        (i % 2 === 0) ? result += '1' : result += '0';    
    return result;
}

// TEST CASES
console.log(stringy(20));
console.log(typeof stringy(3), 'string');
console.log(stringy(3)[0], '1');
for(let i = 0; i < 10; ++i){
    let parameter = (Math.random() * 50 + 1) | 0;
    console.log(stringy(parameter).length, parameter);
  }