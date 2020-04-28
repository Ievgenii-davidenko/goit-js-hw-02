'use strict';


const formatString = function(string) {
  const stringLength = string.length;
  const limitOfLength = 40;

  if (stringLength >limitOfLength) {
    let slicedString = string.slice(0, 40);
    
    return slicedString + '...';
  } else {
     return string ;
  }

  // return message;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка

