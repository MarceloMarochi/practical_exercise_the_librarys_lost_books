# The Library's Lost Books

## Steps to run the project

1. Install dependencies:
```
npm i
```

2. Rename the file 'env.template' for '.env' and complete the environment variables. (The variables are completed with data from a previously created database.)

3. Sync the database
```
node ./service/service.js
```

4. Execute the file 'importCSV.js'
```
node importCSV.js
```



## Exercise statement

The Library's Lost Books

Imagine you're helping a library that's recently digitized its collection.
Unfortunately, the digital catalog has become corrupted, and some book records are missing crucial information.
You have a list of books but some entries are incomplete or have errors.
Your task is to organize and fix the library's digital catalog.
You'll receive a CSV file with a list of book entries.

Each entry should contain three fields comma-separated, with book information: Title, Author, Publication Year

Some entries are completely valid. However, others might have issues like:

- The book's title (which should always be present).
- The author's name (which might be missing).
- Missing or invalid publication years (e.g., negative years, or years far in the future, or string instead of number, etc).
- Duplicate entries for the same book.

Your goal is to:

- Create a well-organized structure to store this book information.
- Identify and correct entries with missing or invalid data.
    - For missing authors, mark the book as “Author Unknown”.
    - For invalid publication years, use a default value like 0.
- Remove duplicate entries, keeping only one valid record for each unique book.
- Finally, present a clean, organized list of the corrected book entries.
- Information grouped by author (if available) or by publication year (if author is unknown) is a plus.
- Add anything that you consider of additional value
