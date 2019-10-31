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
router.put('/:id', putProvincia);
router.post('/', postProvincia);
router.delete('/:id', deleteProvincia);


export default router;
