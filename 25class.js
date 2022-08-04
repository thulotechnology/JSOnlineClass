// Creating a class
class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}
// 2 min
// Create an object from the class

const book = new Book("China Harayeko Manxe", "Haribansa Acharya")
const book2 = new Book("Learn JS", "Bishworaj Poudel")
const book3 = new Book("Learn Golang", "ABC Acharya")


const objectList = [book, book2, book3]

objectList.forEach(element => {
    console.log(`${element.title} is written by ${element.author}`);
});

// Create a class with name Person [id, name, age] and create 3 object from the class and print all details.