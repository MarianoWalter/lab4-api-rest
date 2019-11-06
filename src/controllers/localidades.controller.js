import Localidad from '../models/Localidad';

export async function getLocalidades(request, response) {

    try {
        let lista = await Localidad.findAll();
        response.json(lista);
    } catch (err) {
        console.error('Error al consultar las localidades', err);
        response.status(500).send('Error interno');
    }
    
};

export async function getLocalidadById(req, res) {
    try {
        var idLoc = req.params.id;
        let loc = await Localidad.findOne({
            where: {
                id: idLoc,
            },
        });
        
        if (loc) {
            res.json(loc);
        } else {
            res.status(404).send('Localidad no encontrada');
        }
    } catch (err) {
        console.error('Error al consultar la localidad con ID ' + idLoc);
        console.error(err);
        res.status(500).json(err);
    }
}

export async function putLocalidad(req, res) {
    // TODO
    res.status(501).send('TODO put');
}

export async function postLocalidad(req, res) {
    let datosLocalidad = req.body;
	console.warn('Nombre localidad: ' + datosLocalidad.nombre);

	try {
		let localidad = await Localidad.create({
            nombre: datosLocalidad.nombre,
            departamento_id: datosLocalidad.departamento_id,
		});

		res.status(201).json(localidad);
	} catch (err) {
		console.error('Error al crear la localidad', err);
		res.status(500).send('Error al crear la localidad');
	}
}

export async function deleteLocalidad(req, res) {
    try {
		let borrados = await Localidad.destroy({
			where: {
				id: req.params.id
			}
		});

		res.json({ borrados });
	} catch (err) {
		console.error('Error al borrar la localidad', err);
		res.status(500).send('Error al borrar la localidad');
	}
}
