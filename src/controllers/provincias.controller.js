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

export async function getProvinciaById(req, res) {
	try {
		let id = req.params.id;
		let prov = await Provincia.findOne({
			where: {
				id: id,
			},
		});

		if (prov) {
			res.json(prov);
		} else {
			res.status(404).send('Provincia no encontrada');
		}

	} catch (err) {
		console.error('err')
		console.error(err)
		res.status(500).json(err);
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
