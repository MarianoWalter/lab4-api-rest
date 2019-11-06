import Sequelize from 'sequelize';
import database from '../database/database';

const Departamento = database.define('departamentos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: Sequelize.STRING,
    },

    // TODO relación con provincia
    provincia_id: {
        type: Sequelize.INTEGER,
    },

});

export default Departamento;
