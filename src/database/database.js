import Sequelize from 'sequelize';

const DB = 'geoinfo';
const USERNAME = 'postgres';
const PASSWORD = 'postgres';

const database = new Sequelize(DB, USERNAME, PASSWORD, {
	dialect: 'postgres',
	host: 'localhost',
});

export default database;
