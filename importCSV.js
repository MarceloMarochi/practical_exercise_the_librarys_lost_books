import fs from "fs";
import csv from "csv-parser";
import {Book} from './domain/book.js';


async function importCSV(filePath) {
    const books = [];
    
    fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (row) => {
            let { Title, Author, PublicationYear } = row;

            if (!Title) return;
            if (!Author) Author = "Author Unknown";
            let year = parseInt(PublicationYear);
            if (isNaN(year) || year < 0 || year > new Date().getFullYear()) {
                year = 0;
            }

            books.push({ title: Title, author: Author, publication_year: year });
        })
        .on("end", async () => {
            try {
                for (let book of books) {
                    await Book.findOrCreate({ where: book });
                }
                console.log("Import completed.");
            } catch (error) {
                console.error("Error to insert books:", error);
            }
        });
    
}

importCSV("books.csv");