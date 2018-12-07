"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 404ハンドラーミドルウェア
 */
const report = require("@toei-jp/report-domain");
exports.default = (req, __, next) => {
    next(new report.factory.errors.NotFound(`router for [${req.originalUrl}]`));
};
