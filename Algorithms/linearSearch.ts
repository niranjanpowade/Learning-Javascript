// let numbers: number[] = [65,7,4,6,7,55,54,87,5,4,5,5,74744,4];
// let x:number = 4575;
// let arrayLength: number= numbers.length;
// for(let i=0;i<=arrayLength;i++){
//     if(numbers[i]==x){
//         console.log("Number found at index :"+i)
//     }
//     console.log("Element not found");
// }

function linearSearch(arr: number[],target:number){
    for(let i =0;i<=arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

let numbers: number[] = [65,7,4,6,7,55,54,87,5,4,5,5,74744,4];
let targetValue:number = 54555;

const result = linearSearch(numbers, targetValue);

if(result!==-1){
    console.log(`Element ${targetValue} found at index  ${result}.`);
}else{
    console.log("Element not found in the array")
}
