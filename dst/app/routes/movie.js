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
// import authentication from '../middlewares/authentication';
const sequelize_1 = require("../../sequelize");
// import permitScopes from '../middlewares/permitScopes';
const validator_1 = require("../middlewares/validator");
const movieRouter = express_1.Router();
// ticketTypesRouter.use(authentication);
movieRouter.get('', 
// permitScopes(['admin']),
(_, __, next) => {
    next();
}, validator_1.default, (_, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const movieRepo = new domain.repository.Movie(sequelize_1.default);
        const movies = yield movieRepo.movieModel.findAll();
        res.json(movies);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = movieRouter;
//# sourceMappingURL=movie.js.map