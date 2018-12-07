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

const theaterRouter = Router();
theaterRouter.use(authentication);

theaterRouter.get(
    '',
    permitScopes(['admin']),
    async (_, res, next) => {
        try {
            const theaterRepo = new domain.repository.Theater(sequelize);
            const theaters = await theaterRepo.theaterModel.findAll();
            res.json(theaters);
        } catch (error) {
            next(error);
        }
    }
);

export default theaterRouter;
