import Departamento from '../models/Departamento';

export async function getDepartamentos(request, response) {

    try {
        let lista = await Departamento.findAll();
        response.json(lista);
    } catch (err) {
        console.error('Error al consultar los departamentos', err);
        response.status(500).send('Error interno');
    }
    
};

export async function getDepartamentoById(req, res) {
    try {
        var idDep = req.params.id;
        let dep = await Departamento.findOne({
            where: {
                id: idDep,
            },
        });
        
        if (dep) {
            res.json(dep);
        } else {
            res.status(404).send('Departamento no encontrado');
        }
    } catch (err) {
        console.error('Error al consultar el departamento con ID ' + idDep);
        console.error(err);
        res.status(500).json(err);
    }
}

export async function putDepartamento(req, res) {
    // TODO
    res.status(501).send('TODO put');
}

export async function postDepartamento(req, res) {
    let datosDepartamento = req.body;
	console.warn('Nombre departamento: ' + datosDepartamento.nombre);

	try {
		let departamento = await Departamento.create({
            nombre: datosDepartamento.nombre,
            provincia_id: datosDepartamento.provincia_id,
		});

		res.status(201).json(departamento);
	} catch (err) {
		console.error('Error al crear el departamento', err);
		res.status(500).send('Error al crear el departamento');
	}
}

export async function deleteDepartamento(req, res) {
    try {
		let borrados = await Departamento.destroy({
			where: {
				id: req.params.id
			}
		});

		res.json({ borrados });
	} catch (err) {
		console.error('Error al borrar el departamento', err);
		res.status(500).send('Error al borrar el departamento');
	}
}
