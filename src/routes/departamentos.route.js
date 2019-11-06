import { Router } from 'express';

import {
	getDepartamentos,
	getDepartamentoById,
	putDepartamento,
	postDepartamento,
	deleteDepartamento,
} from '../controllers/departamentos.controller';

const router = Router();

// TODO
router.get('/', getDepartamentos);
router.get('/:id', getDepartamentoById);
router.put('/:id', putDepartamento);
router.post('/', postDepartamento);
router.delete('/:id', deleteDepartamento);


export default router;
