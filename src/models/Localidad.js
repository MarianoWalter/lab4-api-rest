import Sequelize from 'sequelize';
import database from '../database/database';

const Localidad = database.define('localidades', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: Sequelize.STRING,
    },

    // TODO relación con departamento
    departamento_id: {
        type: Sequelize.INTEGER,
    },

});

export default Localidad;
