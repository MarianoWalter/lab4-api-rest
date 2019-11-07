import Provincia from '../models/Provincia';
import { Op } from 'sequelize';

/** Consultar la lista de provincias */
export async function getProvincias(request, response) {

	try {
		let queryNombre = `%${ request.query.nombre || '' }%`;

		let lista = await Provincia.findAll({
			where: {
				nombre: {
					[Op.iLike]: queryNombre,
				},
			},
		});
		response.json(lista);
	} catch (err) {
		console.error('Error al consultar las provincias', err);
		response.status(500).send('Error interno');
	}

};

export async function getProvinciaById(req, res) {
	try {
		let idProv = req.params.id;
		let prov = await Provincia.findOne({
			where: {
				id: idProv,
			},
		});

		if (prov) {
			res.json(prov);
		} else {
			res.status(404).send('Provincia no encontrada');
		}

	} catch (err) {
		console.error('Error al consultar la provincia con ID ' + idProv);
		console.error(err)
		res.status(500).json(err);
	}
};

export function putProvincia(req, res) {
	// TODO
	res.status(501).send('TODO put');
};

export async function postProvincia(req, res) {
	let datosProvincia = req.body;
	console.warn('Nombre provincia: ' + datosProvincia.nombre);

	try {
		let provincia = await Provincia.create({
			nombre: datosProvincia.nombre,
		});

		res.status(201).json(provincia);
	} catch (err) {
		console.error('Error al crear la provincia', err);
		res.status(500).send('Error al crear la provincia');
	}
};

export async function deleteProvincia(req, res) {
	try {
		let borrados = await Provincia.destroy({
			where: {
				id: req.params.id
			}
		});

		res.json({ borrados });
	} catch (err) {
		console.error('Error al borrar la provincia', err);
		res.status(500).send('Error al borrar la provincia');
	}
};
