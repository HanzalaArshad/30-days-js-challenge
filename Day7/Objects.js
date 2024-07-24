// Activity 1
// Task 1

let book = {
  title: "1984",
  Author: "George Orwell",
  year: "1984"
}

console.log(book);

// Task 2
console.log(book.title);

// Activity 2
// Task 3

book.values = function() {
  return `Book: ${this.title}, Author: ${this.Author}`;
}

// Logging the result
console.log(book.values());

book.updateYear=function(newYear){
  this.year=newYear;
  return `Title : ${this.Author} ,Author   `
}

// Activity 3

// Task 5

const Library={
  name:"hasrat mohani library",
  books:["jinnah of pakistan,dasht e soos ,1984"]
}

// console.log(Object.values(Library.books.politics));

// Task 6
console.log(Object.values(Library));

// Activity 4
// task 7

book.getupdate=function(){
  return `title: ${this.title}, year : ${this.year}`
}


console.log(book.getupdate());

for (let property in book) {
  if (book.hasOwnProperty(property)) {
    console.log(`${property}: ${book[property]}`);
  }
}
