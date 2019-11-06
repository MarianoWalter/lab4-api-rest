import Sequelize from 'sequelize';
import database from '../database/database';
import Departamento from './Departamento';

const Provincia = database.define('provincias', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	nombre: {
		type: Sequelize.STRING,
	},
});

Provincia.hasMany(Departamento, {
    foreignKey: 'provincia_id',
});
Departamento.belongsTo(Provincia, {
	foreignKey: 'provincia_id',
});

export default Provincia;
