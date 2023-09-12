let obj = { a: 1, b: 2 };
let jsonStr = JSON.stringify(obj); // Converts to '{"a":1,"b":2}'
let newObj = JSON.parse(jsonStr); // Converts back to an object
