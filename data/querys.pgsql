CREATE TABLE Books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) DEFAULT 'Author Unknown',
    publication_year INT DEFAULT 0,
    UNIQUE (title, author, publication_year)
);

SELECT * FROM information_schema.tables WHERE table_name = 'Books';

SELECT * FROM Books;

DROP INDEX IF EXISTS books_title_author_publication_year;
