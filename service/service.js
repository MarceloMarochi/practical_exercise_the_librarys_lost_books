import express from 'express';
import {Book}  from '../domain/book.js';
import {sequelize} from '../data/database.js';

const app = express();
app.use(express.json());

app.get("/books", async (req, res) => {
    const {groupBy} = req.query;
    let order = [ ["author", "ASC"], ["publication_year", "ASC"] ];

    if (groupBy === "publication_year") {
        order = [["publication_year", "ASC"], ["author", "ASC"]];
    }

    const books = await Book.findAll({ order });
    res.jsno(books);
});

sequelize.sync().then(() => {
    app.listen(3000, () => console.log("Server running on port 3000"));
});