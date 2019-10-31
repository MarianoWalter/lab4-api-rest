import { Router } from 'express';

import { getProvincias } from '../controllers/provincias.controller';

const router = Router();

router.get('/', getProvincias);

export default router;
