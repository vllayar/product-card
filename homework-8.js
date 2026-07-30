// Task 3
const programmer = {
  firstName: 'Allayar',
  lastName: 'Allaniyazov',
  email: '420allayar@gmail.com',
  age: 21,
  country: 'Kazakhstan',
  city: 'Almaty',
  maritalStatus: 'married'
}

console.log('Task 3');
console.log(programmer);

// Task 4
const dodge = {
  make: 'Dodge',
  model: 'Challenger SRT Hellcat',
  year: '2021',
  color: 'TorRed',
  transmission: '6-Speed Manual'
}

dodge.owner = programmer;

console.log('Task 4');
console.log(dodge.owner);

// Task 5
function hasMaximumSpeed(car) {
  if (Object.hasOwn(car, 'maximumSpeed')) {
    return true;
  } else {
    car.maximumSpeed = 320;
  }
}

hasMaximumSpeed(dodge);

console.log('Task 5');
console.log(dodge.maximumSpeed);

// Task 6
function logObjectValue(object, property) {
  console.log(property);
}

console.log('Task 6')
logObjectValue(dodge, dodge.maximumSpeed);

// Task 7
const productsList = ['bread', 'milk', 'eggs', 'butter', 'chicken'];
console.log('Task 7');
console.log(productsList);

// Task 8
const fictionBooks = [
  {
    author: 'F. Scott Fitzgerald',
    title: 'The Great Gatsby',
    year: 1925,
    coverColor: 'Deep Blue',
    genre: 'Classic Fiction'
  },
  {
    author: 'Frank Herbert',
    title: 'Dune',
    year: 1965,
    coverColor: 'Sand Gold',
    genre: 'Science Fiction',
  },
  {
    author: 'Harper Lee',
    title: 'To Kill a Mockingbird',
    year: 1960,
    coverColor: 'Soft Slate',
    genre: 'Southern Gothic Fiction',
  },
  {
    author: 'George Orwell',
    title: '1984',
    year: 1949,
    coverColor: 'Industrial Gray',
    genre: 'Dystopian Fiction',
  },
  {
    author: 'J.R.R. Tolkien',
    title: 'The Hobbit',
    year: 1937,
    coverColor: 'Forest Green',
    genre: 'High Fantasy',
  }
]

fictionBooks.push({
  author: 'Gabriel García Márquez',
  title: 'One Hundred Years of Solitude',
  year: 1967,
  color: 'Golden Yellow',
  coverColor: 'Terracotta',
  genre: 'Magical Realism'
});

console.log('Task 8');
console.log(fictionBooks);

// Task 9
const harryPotterBooks = [
  {
    author: 'J.K. Rowling',
    title: 'Fantastic Beasts and Where to Find Them',
    year: 2001,
    color: 'Crimson Red',
    coverColor: 'Dark Red',
    genre: 'Fantasy / Field Guide'
  },
  {
    author: 'J.K. Rowling',
    title: 'The Tales of Beedle the Bard',
    year: 2008,
    color: 'Royal Blue',
    coverColor: 'Midnight Blue',
    genre: 'Fantasy / Fairy Tales'
  },
  {
    author: 'J.K. Rowling',
    title: 'Quidditch Through the Ages',
    year: 2001,
    color: 'Emerald Green',
    coverColor: 'Deep Green',
    genre: 'Fantasy / Sports History'
  }
];

let myBooksWishlist = [...fictionBooks, ...harryPotterBooks];

console.log('Task 9');
console.log(myBooksWishlist);

// Task 10
function checkRarity(booksList) {
  return booksList.map((book) => {
    if (book.year >= 2000) {
      book.isRare = true;
    } else {
      book.isRare = false;
    }
    return book;
  });
}

console.log('Task 10');
console.log(checkRarity(myBooksWishlist));