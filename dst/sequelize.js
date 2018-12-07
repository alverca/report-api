"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * sequelize
 */
const report_domain_1 = require("@toei-jp/report-domain");
const createDebug = require("debug");
const debug = createDebug('api:sequelize');
const sequelize = new report_domain_1.Sequelize(process.env.SQLSERVER_DATABASE, process.env.SQLSERVER_USERNAME, process.env.SQLSERVER_PASSWORD, {
    host: process.env.SQLSERVER_HOST,
    dialect: 'mssql',
    dialectOptions: {
        encrypt: true
    }
});
sequelize.authenticate().then(() => {
    debug('SQL server connected');
}).catch((err) => {
    debug(`SQL connection error ${err}`);
    process.exit();
});
exports.default = sequelize;
