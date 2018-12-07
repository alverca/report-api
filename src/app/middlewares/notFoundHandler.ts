/**
 * 404ハンドラーミドルウェア
 */
import * as report from '@toei-jp/report-domain';
import { NextFunction, Request, Response } from 'express';

export default (req: Request, __: Response, next: NextFunction) => {
    next(new report.factory.errors.NotFound(`router for [${req.originalUrl}]`));
};
