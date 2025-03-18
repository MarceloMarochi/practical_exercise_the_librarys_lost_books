import { DataTypes } from "sequelize";
import { sequelize } from "../data/database.js";

const Book = sequelize.define("books", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        defaultValue: 'Author Unknown',
    },
    publication_year: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            min: 0,
            max: new Date().getFullYear(),
            },
        },
    }, {
        indexes: [
            {
                unique: true, 
                fields: ['title', 'author', 'publication_year']
            }
        ],
});

export { Book };