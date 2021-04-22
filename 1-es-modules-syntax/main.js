import sum, {
  subtract,
  multiply,
  divide,
  numberToExport as importedNumber,
} from './lib/math';

console.log(sum(4, 5));
console.log(subtract(8, 4));
console.log(multiply(6, 4));
console.log(divide(8, 2));

console.log(importedNumber, 'Imported number');
