import { Router } from 'express';

import {
	getProvincias,
	getProvinciaById,
	putProvincia,
	postProvincia,
	deleteProvincia,
} from '../controllers/provincias.controller';

const router = Router();

router.get('/', getProvincias);
router.get('/:id', getProvinciaById);
router.put('/', putProvincia);
router.post('/', postProvincia);
router.delete('/', deleteProvincia);


export default router;
