var operations = require("./connect");
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

it("should be no result", async function(){
     
    var expectedResult = 0;
    var result = await operations.GetByName("TestDB", "XP-Pen");
    if(result.count!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result.count}`);
    }
});

it("should be no result(show)", async function(){
     
    var expectedResult = 0;
    var result = await operations.GetByName("TestDB", "XP-Pen");
    if(result.data.length!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result.data.length}`);
    }
});

it("should be no result(data)", async function(){
     
    var expectedResult = [];
    var result = await operations.GetByName("TestDB", "XP-Pen");
    if(CompareObj(result, expectedResult)){
        throw new Error(`Expected empty object`);
    }
});

it("should be less than 20 lines", async function(){
     
    var expectedResult = 12;
    var result = await operations.GetByName("TestDB", "Apple");
    if(result.count!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result.count}`);
    }
});

it("should be less than 20 lines(show)", async function(){
     
    var expectedResult = 12;
    var result = await operations.GetByName("TestDB", "Apple");
    if(result.data.length!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result.data.length}`);
    }
});

it("should be less than 20 lines(data)", async function(){
     
    var expectedResult = appleResult;
    var result = await operations.GetByName("TestDB", "Apple");
    if(CompareObj(result, expectedResult)){
        throw new Error(`Expected correct lines`);
    }
});
 
it("should get more than shown lines", async function(){
     
    var expectedResult = 39;
    var result = await operations.GetByName("TestDB", "Galaxy");
    if(result.count!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result.count}`);
    }
});

it("should get more than shown lines(show)", async function(){
     
    var expectedResult = 20;
    var result = await operations.GetByName("TestDB", "Galaxy");
    if(result.data.length!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result.data.length}`);
    }
});

it("should get more than shown lines(data)", async function(){
     
    var expectedResult = galaxyResult;
    var result = await operations.GetByName("TestDB", "Galaxy");
    if(CompareObj(result, expectedResult)){
        throw new Error(`Expected correct lines`);
    }
});


function CompareObj (expected, real)
{
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