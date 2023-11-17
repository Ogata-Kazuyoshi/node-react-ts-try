import { Router } from 'express';
import data from './data';
const router = Router();

router.use('/data', data);

export default router;
