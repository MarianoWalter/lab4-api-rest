import Provincia from '../models/Provincia';

/** Consultar la lista de provincias */
export async function getProvincias(request, response) {

	try {
		let lista = await Provincia.findAll();
		response.json(lista);
	} catch (err) {
		console.error('Error al consultar las provincias', err);
		response.status(500).send('Error interno');
	}

};

export function putProvincia(req, res) {
	// TODO
	res.send('TODO put');
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

export function deleteProvincia(req, res) {
	// TODO
	res.send('TODO delete');
};
