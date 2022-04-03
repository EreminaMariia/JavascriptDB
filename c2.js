var operations = require("./connect");

(async () => {
    let r = await operations.GetByName ('TestDB', 'XP-Pen');
    console.log(r.data);
    console.log(r.count);
    })();