"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ルター
 */
const express_1 = require("express");
const account_1 = require("./account");
const income_1 = require("./income");
const screeningWork_1 = require("./screeningWork");
const theater_1 = require("./theater");
const router = express_1.Router();
router.use('/account', account_1.default);
router.use('/income', income_1.default);
router.use('/screeningWork', screeningWork_1.default);
router.use('/theater', theater_1.default);
exports.default = router;
