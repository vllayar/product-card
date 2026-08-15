import { comments } from './comment.js';

// TASK 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = numbers.slice(4, 10);
console.log(`Task 2\n${newNumbers}`);

// TASK 3
const drinks = ['tea', 'coffee', 'juice', 'milk', 'lemonade', 'cocktail'];
console.log(drinks.includes('coffee'));
console.log(drinks.includes('wine'));

// TASK 4
function reverseArray(array) {
  return array.reverse();
}
console.log(reverseArray(numbers));
console.log(reverseArray(drinks));

// TASK 6
const comEmails = comments.filter(comment => comment.email.includes('.com'));
console.log(comEmails);