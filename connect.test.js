const operations = require("./connect");
const sql = require('mssql'); 
const DBName = "TestDB";
const tableName = "TestTable";

  dbConfig = { 

  user: 'user', 

  password: 'passwordpassword', 

  server: 'localhost', 

  database: DBName, 

  trustServerCertificate: true, 

  options: { 

      trustedConnection: true 

    } 

} 

describe('tests', function () { 

    before(async function () { 

        var r = MakeString(testData);
        var c = `DELETE FROM TestTable; INSERT INTO ` + tableName + ` (Name, Description) VALUES` + r;
        await sql.connect(dbConfig).then(pool => { 

            return pool.request().query(c);

        }) 
    }); 
    after(async function () { 
        await sql.connect(dbConfig).then(pool => { 

            return pool.request().query(`DELETE FROM `+ tableName);

        }) 
    });   

it("should be no table", async function(){
     
        var result;
        var result = await operations.GetByName("WrongName", "XP-Pen").catch(err => {

            result = err;
        });;
        if(result === undefined){            
            throw new Error(`Expected exseption, but got ${result}`);
        }
    });

it("should be no result", async function(){
     
    var expectedResult = 0;
    var result = await operations.GetByName(tableName, "XP-Pen");
    if(result.count!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result.count}`);
    }
});

it("should be no result(show)", async function(){
     
    var expectedResult = 0;
    var result = await operations.GetByName(tableName, "XP-Pen");
    if(result.data.length!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result.data.length}`);
    }
});

it("should be no result(data)", async function(){
     
    var expectedResult = [];
    var result = await operations.GetByName(tableName, "XP-Pen");
    if(!CompareObj(result.data, expectedResult)){
        throw new Error(`Expected ${MakeString(expectedResult)}, but got ${MakeString(result.data)}`);
    }
});

it("should be less than 20 lines", async function(){
     
    var expectedResult = 12;
    var result = await operations.GetByName(tableName, "Apple");
    if(result.count!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result.count}`);
    }
});

it("should be less than 20 lines(show)", async function(){
     
    var expectedResult = 12;
    var result = await operations.GetByName(tableName, "Apple");
    if(result.data.length!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result.data.length}`);
    }
});

it("should be less than 20 lines(data)", async function(){
     
    var expectedResult = appleResult;
    var result = await operations.GetByName(tableName, "Apple");
    if(!CompareObj(result.data, expectedResult)){
        throw new Error(`Expected ${MakeString(expectedResult)}, but got ${MakeString(result.data)}`);
    }
});
 
it("should get more than shown lines", async function(){
     
    var expectedResult = 39;
    var result = await operations.GetByName(tableName, "Galaxy");
    if(result.count!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result.count}`);
    }
});

it("should get more than shown lines(show)", async function(){
     
    var expectedResult = 20;
    var result = await operations.GetByName(tableName, "Galaxy");
    if(result.data.length!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result.data.length}`);
    }
});

it("should get more than shown lines(data)", async function(){
     
    var expectedResult = galaxyResult;
    var result = await operations.GetByName(tableName, "Galaxy");
    if(!CompareObj(result.data, expectedResult)){
        throw new Error(`Expected ${MakeString(expectedResult)}, but got ${MakeString(result.data)}`);
    }
});

it("should get part of the word", async function(){
     
    var expectedResult = 5;
    var result = await operations.GetByName(tableName, "-");
    if(result.count!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result.count}`);
    }
});

it("should get part of the word(show)", async function(){
     
    var expectedResult = 5;
    var result = await operations.GetByName(tableName, "-");
    if(result.data.length!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result.data.length}`);
    }
});

it("should get part of the word(data)", async function(){
     
    var expectedResult = lineResult;
    var result = await operations.GetByName(tableName, "-");
    if(!CompareObj(result.data, expectedResult)){
        throw new Error(`Expected ${MakeString(expectedResult)}, but got ${MakeString(result.data)}`);
    }
});
});


function CompareObj (real, expected)
{
    if (real.length === undefined) return false;
    
    if (real.length !== expected.length) return false;

    if (real.length == 0 && expected.length == 0) return true;

    for (let i = 0; i < real.length; i++) { 
        if((real[i].Name!== expected[i].Name) || (real[i].Description!== expected[i].Description) )
        {
            return false;
        }
      }
      return true;
}

function MakeString (testData)
{
    var result = "";
    var a = ",";
    for (let i = 0; i < testData.length; i++)
    { 
    if (i == testData.length-1)
    {
        a = " ";
    }
    result+=('('+ "'" + testData[i].Name + "'" +',' + "'" +testData[i].Description + "'" +')'+a);
    }
    return result;
}

var galaxyResult = [
    { Name: 'A Galaxy', Description: 'Samsung' },
    { Name: 'A-gal', Description: 'Galaxy' },
    { Name: 'A-gal', Description: 'Galaxy' },
    { Name: 'A-galaxy', Description: 'Galaxy' },
    { Name: 'A-galaxy', Description: 'Samsung' },
    { Name: 'A-galaxy', Description: 'Samsung' },
    { Name: 'Galaxy', Description: 'Samsung' },
    { Name: 'Galaxy', Description: 'Samsung' },
    { Name: 'Galaxy S5', Description: 'Samsung' },
    { Name: 'Galaxy S5', Description: 'Samsung' },
    { Name: 'Galaxy S5', Description: 'Samsung' },
    { Name: 'Galaxy S5', Description: 'Samsung' },
    { Name: 'Galaxy S5', Description: 'Samsung' },
    { Name: 'Galaxy S5', Description: 'Samsung' },
    { Name: 'Galaxy S5', Description: 'Samsung' },
    { Name: 'Galaxy S5', Description: 'Samsung' },
    { Name: 'Galaxy S5', Description: 'Samsung' },
    { Name: 'Galaxy S5', Description: 'Samsung' },
    { Name: 'Galaxy S5', Description: 'Samsung' },
    { Name: 'Galaxy S5', Description: 'Samsung' }
  ];

  var appleResult = [
    { Name: 'iPhone 2', Description: 'Apple' },
    { Name: 'iPhone 2', Description: 'Apple' },
    { Name: 'iPhone 2', Description: 'Apple' },
    { Name: 'iPhone 2', Description: 'Apple' },
    { Name: 'iPhone 3', Description: 'Apple' },
    { Name: 'iPhone 3', Description: 'Apple' },
    { Name: 'iPhone 3', Description: 'Apple' },
    { Name: 'iPhone 3', Description: 'Apple' },
    { Name: 'iPhone 3', Description: 'Apple' },
    { Name: 'iPhone 5', Description: 'Apple' },
    { Name: 'iPhone 6', Description: 'Apple' },
    { Name: 'iPhone 6', Description: 'Apple' }
  ];

var lineResult = [
    { Name: 'A-gal', Description: 'Galaxy' },
    { Name: 'A-gal', Description: 'Galaxy' },
    { Name: 'A-galaxy', Description: 'Galaxy' },
    { Name: 'A-galaxy', Description: 'Samsung' },
    { Name: 'A-galaxy', Description: 'Samsung' }
  ];

  var testData =   [
    {Name:'iPhone 6', Description: 'Apple' }, 
    {Name:'Galaxy S8', Description: 'Samsung'}, 
  {Name:'Galaxy S8 Plus', Description:'Samsung'},
  {Name: 'iPhone 6', Description: 'Apple' }, 
  {Name: 'Galaxy S8', Description: 'Samsung' }, 
  {Name: 'Galaxy S8 Plus', Description: 'Samsung' }, 
  {Name: 'iPhone 5', Description: 'Apple' }, 
  {Name: 'Galaxy S7', Description: 'Samsung' }, 
  {Name: 'Galaxy S7 Plus', Description: 'Samsung' }, 
  {Name: 'iPhone 3', Description: 'Apple' }, 
  {Name: 'iPhone 3', Description: 'Apple' }, 
  {Name: 'iPhone 3', Description: 'Apple' }, 
  {Name: 'iPhone 3', Description: 'Apple' }, 
  {Name: 'iPhone 3', Description: 'Apple' }, 
  {Name: 'iPhone 2', Description: 'Apple' }, 
  {Name: 'iPhone 2', Description: 'Apple' }, 
  {Name: 'iPhone 2', Description: 'Apple' }, 
  {Name: 'iPhone 2', Description: 'Apple' }, 
  {Name: 'Mi6', Description: 'Xiaomi' }, 
  {Name: 'Mi6', Description: 'Xiaomi' }, 
  {Name: 'Mi6', Description: 'Xiaomi' }, 
  {Name: 'Mi6', Description: 'Xiaomi' }, 
  {Name: 'Mi6', Description: 'Xiaomi' }, 
  {Name: 'Mi5', Description: 'Xiaomi' }, 
  {Name: 'Mi5', Description: 'Xiaomi' }, 
  {Name: 'Mi5', Description: 'Xiaomi' }, 
  {Name: 'Galaxy S5', Description: 'Samsung' }, 
  {Name: 'Galaxy S5 Plus', Description: 'Samsung' }, 
  {Name: 'Galaxy S5', Description: 'Samsung' }, 
  {Name: 'Galaxy S5 Plus', Description: 'Samsung' }, 
  {Name: 'Galaxy S5', Description: 'Samsung' }, 
  {Name: 'Galaxy S5 Plus', Description: 'Samsung' }, 
  {Name: 'Galaxy S5', Description: 'Samsung' }, 
  {Name: 'Galaxy S5 Plus', Description: 'Samsung' }, 
  {Name: 'Galaxy S5', Description: 'Samsung' }, 
  {Name: 'Galaxy S5 Plus', Description: 'Samsung' }, 
  {Name: 'Galaxy S5', Description: 'Samsung' }, 
  {Name: 'Galaxy S5 Plus', Description: 'Samsung' }, 
  {Name: 'Mi6', Description: 'Xiaomi' }, 
  {Name: 'Mi6', Description: 'Xiaomi' }, 
  {Name: 'Mi6', Description: 'Xiaomi' }, 
  {Name: 'Mi6', Description: 'Xiaomi' }, 
  {Name: 'Mi6', Description: 'Xiaomi' }, 
  {Name: 'Mi5', Description: 'Xiaomi' }, 
  {Name: 'Mi5', Description: 'Xiaomi' }, 
  {Name: 'Mi5', Description: 'Xiaomi' }, 
  {Name: 'Galaxy S5', Description: 'Samsung' }, 
  {Name: 'Galaxy S5 Plus', Description: 'Samsung' }, 
  {Name: 'Galaxy S5', Description: 'Samsung' }, 
  {Name: 'Galaxy S5 Plus', Description: 'Samsung' }, 
  {Name: 'Galaxy S5', Description: 'Samsung' }, 
  {Name: 'Galaxy S5 Plus', Description: 'Samsung' }, 
  {Name: 'Galaxy S5', Description: 'Samsung' }, 
  {Name: 'Galaxy S5 Plus', Description: 'Samsung' }, 
  {Name: 'Galaxy S5', Description: 'Samsung' }, 
  {Name: 'Galaxy S5 Plus', Description: 'Samsung' }, 
  {Name: 'Galaxy S5', Description: 'Samsung' }, 
  {Name: 'Galaxy S5 Plus', Description: 'Samsung' }, 
  {Name: 'Galaxy', Description: 'Samsung' }, 
  {Name: 'Galaxy', Description: 'Samsung' }, 
  {Name: 'A-gal', Description: 'Galaxy' }, 
  {Name: 'A-gal', Description: 'Galaxy' }, 
  {Name: 'A-galaxy', Description: 'Galaxy' }, 
  {Name: 'A-galaxy', Description: 'Samsung' }, 
  {Name: 'Galaxyon', Description: 'Samsung' }, 
  {Name: 'A-galaxy', Description: 'Samsung' }, 
  {Name: 'A Galaxy', Description: 'Samsung' },  
];
