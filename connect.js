module.exports.GetByName = async function (dbName, sequense)
{
let res = {};
const sql = require('mssql');

        dbConfig = {
        user: 'user',
        password: 'passwordpassword',
        server: 'localhost',
        database: dbName,
        trustServerCertificate: true,
        options: {
            trustedConnection: true
          }
    }

    await sql.connect(dbConfig).then(pool => {

        return pool.request().query(`SELECT TOP 20 Name, Description FROM TestTable 
        WHERE Name LIKE '%` + sequense + `%'
        OR Description LIKE '%` + sequense + `%'
        ORDER BY Name;`)

    }).then(result => {
        res.data = result.recordset.slice();

        }).catch(err => {

            console.log(err);


    });

    await sql.connect(dbConfig).then(pool => {

        return pool.request().query(`SELECT COUNT (*) FROM TestTable 
        WHERE Name LIKE '%` + sequense + `%'
        OR Description LIKE '%` + sequense + `%'`)

    }).then(result => {

        res.count = result.recordset[0][''];

        }).catch(err => {

            console.log(err);


    });

    return res;
}