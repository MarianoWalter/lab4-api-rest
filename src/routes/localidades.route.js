import { Router } from 'express';

import {
	getLocalidades,
	getLocalidadById,
	putLocalidad,
	postLocalidad,
	deleteLocalidad,
} from '../controllers/localidades.controller';

const router = Router();

// TODO
router.get('/', getLocalidades);
router.get('/:id', getLocalidadById);
router.put('/:id', putLocalidad);
router.post('/', postLocalidad);
router.delete('/:id', deleteLocalidad);


export default router;
