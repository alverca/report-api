/**
 * sequelize
 */
import { Sequelize } from '@toei-jp/report-domain';
import * as createDebug from 'debug';

const debug = createDebug('api:sequelize');

const sequelize = new Sequelize(
    <string>process.env.SQLSERVER_DATABASE,
    <string>process.env.SQLSERVER_USERNAME,
    <string>process.env.SQLSERVER_PASSWORD,
    {
        host: process.env.SQLSERVER_HOST,
        dialect: 'mssql',
        dialectOptions: {
            encrypt: true
        }
    }
);

sequelize.authenticate().then(() => {
    debug('SQL server connected');
}).catch((err: any) => {
    debug(`SQL connection error ${err}`);
    process.exit();
});

export default sequelize;
