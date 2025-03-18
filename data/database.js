import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    dialect: 'postgres',
    host: process.env.DB_HOST,
});

sequelize.sync({ alter: true }).then(() => {
    console.log('Database and tables created!');
});

export { sequelize };