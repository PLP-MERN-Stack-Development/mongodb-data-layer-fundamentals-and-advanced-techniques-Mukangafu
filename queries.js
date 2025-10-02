// ===========================
// PLP BOOKSTORE QUERIES
// ===========================

// Switch to plp_bookstore
use plp_bookstore;

// ===========================
// 🔹 BASIC CRUD OPERATIONS
// ===========================

// 1. Insert multiple books (if not already inserted via insert_books.js)
db.books.insertMany([
  {
    title: "Dapper Book",
    author: "Muturi Daniel",
    genre: "Programming",
    published_year: 2023,
    price: 100,
    in_stock: true,
    pages: 220,
    publisher: "Tech Press"
  },
  {
    title: "Learning MongoDB",
    author: "John Doe",
    genre: "Database",
    published_year: 2020,
    price: 80,
    in_stock: true,
    pages: 300,
    publisher: "DataWorks"
  },
  {
    title: "Node.js Essentials",
    author: "Jane Smith",
    genre: "Programming",
    published_year: 2019,
    price: 90,
    in_stock: false,
    pages: 250,
    publisher: "CodeHouse"
  },
  {
    title: "Python for Beginners",
    author: "John Doe",
    genre: "Programming",
    published_year: 2018,
    price: 70,
    in_stock: true,
    pages: 310,
    publisher: "PyPress"
  },
  {
    title: "Mastering React",
    author: "Emily Davis",
    genre: "Frontend",
    published_year: 2021,
    price: 120,
    in_stock: true,
    pages: 410,
    publisher: "WebWorld"
  },
  {
    title: "CSS Secrets",
    author: "Chris Johnson",
    genre: "Frontend",
    published_year: 2016,
    price: 60,
    in_stock: true,
    pages: 180,
    publisher: "DesignHub"
  },
  {
    title: "Effective Java",
    author: "Joshua Bloch",
    genre: "Programming",
    published_year: 2017,
    price: 150,
    in_stock: false,
    pages: 450,
    publisher: "Sun Books"
  },
  {
    title: "Artificial Intelligence",
    author: "Andrew Ng",
    genre: "AI",
    published_year: 2022,
    price: 200,
    in_stock: true,
    pages: 500,
    publisher: "AI Press"
  },
  {
    title: "Deep Learning",
    author: "Ian Goodfellow",
    genre: "AI",
    published_year: 2016,
    price: 180,
    in_stock: true,
    pages: 700,
    publisher: "MIT Press"
  },
  {
    title: "Cloud Computing Basics",
    author: "Sarah Connor",
    genre: "Cloud",
    published_year: 2021,
    price: 110,
    in_stock: true,
    pages: 260,
    publisher: "CloudTech"
  }
]);

// ===========================
// 🔹 BASIC READ QUERIES
// ===========================

// Find all books in a specific genre
db.books.find({ genre: "Programming" });

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2018 } });

// Find books by a specific author
db.books.find({ author: "John Doe" });

// ===========================
// 🔹 UPDATE & DELETE
// ===========================

// Update the price of a specific book
db.books.updateOne(
  { title: "Dapper Book" },
  { $set: { price: 120 } }
);

// Delete a book by its title
db.books.deleteOne({ title: "CSS Secrets" });

// ===========================
// 🔹 ADVANCED QUERIES
// ===========================

// Books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// Projection: return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Sorting by price ascending
db.books.find().sort({ price: 1 });

// Sorting by price descending
db.books.find().sort({ price: -1 });

// Pagination: 5 books per page
// Page 1
db.books.find().limit(5);
// Page 2
db.books.find().skip(5).limit(5);

// ===========================
// 🔹 AGGREGATION PIPELINES
// ===========================

// Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
]);

// Group books by decade
db.books.aggregate([
  {
    $group: {
      _id: { $subtract: [ { $divide: ["$published_year", 10] }, { $mod: [{ $divide: ["$published_year", 10] }, 1] } ] },
      totalBooks: { $sum: 1 }
    }
  }
]);

// ===========================
// 🔹 INDEXING
// ===========================

// Create index on title
db.books.createIndex({ title: 1 });

// Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 });

// Check performance with explain()
db.books.find({ title: "Dapper Book" }).explain("executionStats");
