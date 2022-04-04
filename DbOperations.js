var config = require('./DbConfig');
const sql = require('mssql');

async function GetByName(tableName, sequense) {
    let result = {};

    try {
        let pool = await sql.connect(config);
        let dataQuery = await pool.request().query(
            `SELECT TOP 20 Name, Description FROM ` + tableName +
            ` WHERE Name LIKE '%` + sequense + `%'
            OR Description LIKE '%` + sequense + `%'
            ORDER BY Name, Description;`);
        result.data = dataQuery.recordset.slice();

        let countQuery = await pool.request().query(
            `SELECT COUNT (*) FROM ` + tableName +
            ` WHERE Name LIKE '%` + sequense + `%'
            OR Description LIKE '%` + sequense + `%'`);
        result.count = countQuery.recordset[0][''];

        return result;
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = {
    GetByName: GetByName
};