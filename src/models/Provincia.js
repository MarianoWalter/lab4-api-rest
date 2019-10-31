import Sequelize from 'sequelize';
import database from '../database/database';

const Provincia = database.define('provincia', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	nombre: {
		type: Sequelize.STRING,
	},
});

export default Provincia;
