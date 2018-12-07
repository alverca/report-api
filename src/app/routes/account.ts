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

const accountRouter = Router();
accountRouter.use(authentication);

accountRouter.get(
    '',
    permitScopes(['admin']),
    async (_, res, next) => {
        try {
            const accountRepo = new domain.repository.Account(sequelize);
            const accounts = await accountRepo.accountModel.findAll();
            res.json(accounts);
        } catch (error) {
            next(error);
        }
    }
);

export default accountRouter;
