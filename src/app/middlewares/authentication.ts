/**
 * oauthミドルウェア
 */
import * as report from '@toei-jp/report-domain';

import { cognitoAuth } from '@motionpicture/express-middleware';
import * as createDebug from 'debug';

const debug = createDebug('report-api:middlewares');

// 許可発行者リスト
const ISSUERS = (<string>process.env.TOKEN_ISSUERS).split(',');

const authentication = cognitoAuth({
    issuers: ISSUERS,
    authorizedHandler: async (user, token, req, __, next) => {
        try {
            req.user = user;
            req.accessToken = token;

            next();
        } catch (error) {
            // AmazonCognitoAPIのレート制限をハンドリング
            if (error.name === 'TooManyRequestsException') {
                next(new report.factory.errors.RateLimitExceeded(`getUser ${error.message}`));
            } else {
                next(new report.factory.errors.Unauthorized(`${error.name}:${error.message}`));
            }
        }
    },
    unauthorizedHandler: (err, __1, __2, next) => {
        debug('unauthorized err handled', err);
        next(new report.factory.errors.Unauthorized(err.message));
    }
});

export default authentication;
