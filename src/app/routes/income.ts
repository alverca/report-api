/**
 * 興行外収入ルーター
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

const incomeRouter = Router();
incomeRouter.use(authentication);

incomeRouter.get(
    '',
    permitScopes(['admin']),
    (_, __, next) => {
        next();
    },
    validator,
    async (req, res, next) => {
        try {
            const incomeRepo = new domain.repository.Income(sequelize);
            const incomes = await incomeRepo.search(req.query);
            res.json(incomes);
        } catch (error) {
            next(error);
        }
    }
);

incomeRouter.post(
    '',
    permitScopes(['admin']),
    (req, __, next) => {
        req.checkBody('*.id').exists();
        req.checkBody('*.subjectDetailName').exists();
        req.checkBody('*.subjectDetailCd').exists();
        req.checkBody('*.subjectGroupName').exists();
        req.checkBody('*.subjectGroupCd').exists();
        req.checkBody('*.subjectCd').exists();
        req.checkBody('*.subjectName').exists();
        req.checkBody('*.theaterCd').exists();
        req.checkBody('*.theaterName').exists();
        req.checkBody('*.date').exists().isISO8601();
        req.checkBody('*.amount').optional({ checkFalsy: true }).isNumeric();
        req.checkBody('*.quantity').optional({ checkFalsy: true }).isNumeric();
        next();
    },
    validator,
    async (req, res, next) => {
        try {
            const incomeRepo = new domain.repository.Income(sequelize);
            await incomeRepo.bulkModifyByDateAndTheater(req.body);
            res.json({ status: 'success' });
        } catch (error) {
            next(error);
        }
    }
);

export default incomeRouter;
