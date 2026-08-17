import { comments } from './comment.js';

// TASK 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = numbers.filter(number => number >= 5);
console.log(newNumbers);

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

// TASK 7
const comEmails = comments.filter(comment => comment.email.includes('.com'));
console.log(comEmails);

// TASK 8
const newComments = comments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2: 1
}))
console.log(newComments);

// TASK 9
const commentAuthors = comments.map(comment => ({
  id: comment.id,
  name: comment.name
}));
console.log(commentAuthors);

// TASK 10
const validComments = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}))
console.log(validComments);

// TASK 11
const commentEmailsReduced = comments.reduce((accumulator, comment) => {
  accumulator.push(comment.email);
  return accumulator;
}, [])
console.log(commentEmailsReduced);

const commentAuthorEmails = comments.map(comment => comment.email);
console.log(commentAuthorEmails);

// TASK 12
const stringComments = commentAuthorEmails.toString();
const dashedComments = commentAuthorEmails.join(' - ');
console.log(stringComments);
console.log(dashedComments);