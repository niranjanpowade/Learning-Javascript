// Create an empty hashmap
const hashmap = {};

// Adding key-value pairs to the hashmap
hashmap["name"] = "John";
hashmap["age"] = 30;

// Accessing values by key
console.log(hashmap["name"]); // Output: 'John'
console.log(hashmap["age"]); // Output: 30

// Modifying values
hashmap["age"] = 31;

// Deleting a key-value pair
delete hashmap["age"];

// Checking if a key exists in the hashmap
if ("name" in hashmap) {
  console.log("Name exists in the hashmap");
}
