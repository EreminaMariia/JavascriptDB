module.exports.GetByName = async function (tableName, sequense)
{
let res = {};
const sql = require('mssql');

        dbConfig = {
        user: 'user',
        password: 'passwordpassword',
        server: 'localhost',
        database: "TestDB",
        trustServerCertificate: true,
        options: {
            trustedConnection: true
          }
    }

    await sql.connect(dbConfig).then(pool => {

        return pool.request().query(`SELECT TOP 20 Name, Description FROM `+ tableName + 
        ` WHERE Name LIKE '%` + sequense + `%'
        OR Description LIKE '%` + sequense + `%'
        ORDER BY Name, Description;`)

    }).then(result => {
        res.data = result.recordset.slice();

        }).catch(err => {

            console.log(err);
            res.data = err;
    });

    await sql.connect(dbConfig).then(pool => {

        return pool.request().query(`SELECT COUNT (*) FROM `+ tableName + 
        ` WHERE Name LIKE '%` + sequense + `%'
        OR Description LIKE '%` + sequense + `%'`)

    }).then(result => {

        res.count = result.recordset[0][''];

        }).catch(err => {

            console.log(err);


    });

    return res;
}