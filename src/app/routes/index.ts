/**
 * ルター
 */
import { Router } from 'express';
import accountRouter from './account';
import incomeRouter from './income';
import screeningWorkRouter from './screeningWork';
import theaterRouter from './theater';

const router = Router();

router.use('/account', accountRouter);
router.use('/income', incomeRouter);
router.use('/screeningWork', screeningWorkRouter);
router.use('/theater', theaterRouter);

export default router;
