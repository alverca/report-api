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
 * 科目ルーター
 */
const domain = require("@toei-jp/report-domain");
const express_1 = require("express");
// tslint:disable-next-line:no-submodule-imports
// import { query } from 'express-validator/check';
// import { CREATED, NO_CONTENT } from 'http-status';
const sequelize_1 = require("../../sequelize");
const authentication_1 = require("../middlewares/authentication");
const permitScopes_1 = require("../middlewares/permitScopes");
const accountRouter = express_1.Router();
accountRouter.use(authentication_1.default);
accountRouter.get('', permitScopes_1.default(['admin']), (_, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const accountRepo = new domain.repository.Account(sequelize_1.default);
        const accounts = yield accountRepo.accountModel.findAll();
        res.json(accounts);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = accountRouter;
