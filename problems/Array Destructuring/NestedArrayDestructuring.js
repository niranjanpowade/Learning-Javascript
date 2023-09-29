let arr = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]];

let [x, y, z, , , [l, m, n, o, p]] = arr;
console.log(x, y, z, l, m, n, o, p); //Accessing elements from Nested Array
//Output - 1 2 3 6 7 8 9 10
