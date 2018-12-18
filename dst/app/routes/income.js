"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 興行外収入ルーター
 */
const domain = require("@toei-jp/report-domain");
const express_1 = require("express");
// tslint:disable-next-line:no-submodule-imports
// import { query } from 'express-validator/check';
// import { CREATED, NO_CONTENT } from 'http-status';
const sequelize_1 = require("../../sequelize");
const authentication_1 = require("../middlewares/authentication");
const permitScopes_1 = require("../middlewares/permitScopes");
const validator_1 = require("../middlewares/validator");
const incomeRouter = express_1.Router();
incomeRouter.use(authentication_1.default);
incomeRouter.get('', permitScopes_1.default(['admin']), (_, __, next) => {
    next();
}, validator_1.default, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const incomeRepo = new domain.repository.Income(sequelize_1.default);
        const incomes = yield incomeRepo.search(req.query);
        res.json(incomes);
    }
    catch (error) {
        next(error);
    }
}));
incomeRouter.post('', permitScopes_1.default(['admin']), (req, __, next) => {
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
}, validator_1.default, (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const incomeRepo = new domain.repository.Income(sequelize_1.default);
        yield incomeRepo.bulkModifyByDateAndTheater(req.body);
        res.json({ status: 'success' });
    }
    catch (error) {
        next(error);
    }
}));
exports.default = incomeRouter;
