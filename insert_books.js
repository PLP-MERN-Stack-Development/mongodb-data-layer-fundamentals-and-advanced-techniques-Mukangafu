// insert_books.js
// Script to insert books into the plp_bookstore database

use("plp_bookstore"); // Switch to (or create) plp_bookstore database

db.books.insertMany([
  {
    title: "The Art of Coding",
    author: "John Doe",
    genre: "Technology",
    published_year: 2015,
    price: 45,
    in_stock: true,
    pages: 320,
    publisher: "TechPress"
  },
  {
    title: "Journey Through Space",
    author: "Jane Smith",
    genre: "Science Fiction",
    published_year: 2020,
    price: 30,
    in_stock: true,
    pages: 280,
    publisher: "GalaxyBooks"
  },
  {
    title: "Mystery of the Nile",
    author: "Ahmed Kamal",
    genre: "Adventure",
    published_year: 2012,
    price: 25,
    in_stock: false,
    pages: 350,
    publisher: "RiverHouse"
  },
  {
    title: "Cooking with Love",
    author: "Maria Gonzalez",
    genre: "Cooking",
    published_year: 2018,
    price: 20,
    in_stock: true,
    pages: 200,
    publisher: "FoodiePress"
  },
  {
    title: "History of Africa",
    author: "Daniel Muturi",
    genre: "History",
    published_year: 2010,
    price: 50,
    in_stock: true,
    pages: 500,
    publisher: "HeritageBooks"
  },
  {
    title: "Secrets of the Ocean",
    author: "Liu Wei",
    genre: "Science",
    published_year: 2016,
    price: 35,
    in_stock: false,
    pages: 275,
    publisher: "BlueWorld"
  },
  {
    title: "Mastering JavaScript",
    author: "Emily Clark",
    genre: "Technology",
    published_year: 2021,
    price: 55,
    in_stock: true,
    pages: 400,
    publisher: "CodeMasters"
  },
  {
    title: "Gardening for Beginners",
    author: "Peter Brown",
    genre: "Lifestyle",
    published_year: 2017,
    price: 18,
    in_stock: true,
    pages: 150,
    publisher: "GreenLeaf"
  },
  {
    title: "The Lost Kingdom",
    author: "Sofia Rossi",
    genre: "Fantasy",
    published_year: 2019,
    price: 40,
    in_stock: true,
    pages: 420,
    publisher: "DreamWorld"
  },
  {
    title: "Business 101",
    author: "Michael Johnson",
    genre: "Business",
    published_year: 2014,
    price: 28,
    in_stock: false,
    pages: 310,
    publisher: "BizPress"
  }
]);
