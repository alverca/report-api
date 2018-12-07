/**
 * 科目ルーター
 */
import * as domain from '@toei-jp/report-domain';
import { Router } from 'express';
// tslint:disable-next-line:no-submodule-imports
// import { query } from 'express-validator/check';
// import { CREATED, NO_CONTENT } from 'http-status';

import sequelize from '../../sequelize';
import authentication from '../middlewares/authentication';
import permitScopes from '../middlewares/permitScopes';
import validator from '../middlewares/validator';

const screeningWorkRouter = Router();
screeningWorkRouter.use(authentication);

screeningWorkRouter.get(
    '',
    permitScopes(['admin']),
    (_, __, next) => {
        next();
    },
    validator,
    async (req, res, next) => {
        try {
            const screeningWorkRepo = new domain.repository.ScreeningWork(sequelize);
            const screeningWorks = await screeningWorkRepo.search(req.query);
            res.json(screeningWorks);
        } catch (error) {
            next(error);
        }
    }
);

export default screeningWorkRouter;
