PLP Bookstore – MongoDB Data Layer Project

This project demonstrates the fundamentals and advanced techniques of working with MongoDB.
It is built as part of the PLP MERN Stack Development course.

Project Overview

We are building a simple Bookstore Database where:

A MongoDB database named plp_bookstore is created.

A collection named books stores book information.

Sample data is inserted into the collection.

CRUD operations (Create, Read, Update, Delete) are performed.

Advanced queries and aggregation pipelines are demonstrated.

Project Structure
mongodb-data-layer-fundamentals-and-advanced-techniques-Mukangafu/
│── insert_books.js      # Script to insert sample book data
│── queries.js           # Script with CRUD & advanced queries
│── README.md            # Project documentation

Setup Instructions
1. Clone the Repository
cd Desktop/MERN
git clone https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-Mukangafu.git
cd mongodb-data-layer-fundamentals-and-advanced-techniques-Mukangafu

2. Start MongoDB

Make sure your MongoDB server is running.

If you are using local MongoDB, run:

mongod


If you are using MongoDB Atlas, ensure you have your connection string ready.

3. Open Mongo Shell

Login with your MongoDB credentials:

mongosh -u <username> -p <password> --authenticationDatabase admin

4. Run Insert Script

Load the sample data into the books collection:

load("insert_books.js")


This will insert 10 sample book documents into the plp_bookstore database.

5. Run Queries Script

To test CRUD and advanced operations:

load("queries.js")

Example Data Inserted
{
  "title": "Dapper Book",
  "author": "Muturi Daniel",
  "price": 100,
  "genre": "Programming",
  "publishedYear": 2023
}

Features Demonstrated

Creating a database and collection

Inserting single & multiple documents

Retrieving documents using queries

Updating & deleting documents

Using operators ($gt, $lt, $in, $and, $or)

Aggregation pipeline examples (e.g., group by genre, average price)

Author

Daniel Muturi
PLP MERN FullStack Developer