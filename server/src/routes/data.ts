import { Router, Request, Response, NextFunction } from 'express';
const router = Router();

const temp = { 1: 100, 2: 200, 3: 300 };

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send(temp);
});

export default router;
