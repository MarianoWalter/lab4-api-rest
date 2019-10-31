import { Router } from 'express';

import {
	getProvincias,
	putProvincia,
	postProvincia,
	deleteProvincia,
} from '../controllers/provincias.controller';

const router = Router();

router.get('/', getProvincias);
router.put('/', putProvincia);
router.post('/', postProvincia);
router.delete('/', deleteProvincia);


export default router;
