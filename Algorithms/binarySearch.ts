function binarySearch(arr: number[],targetValue: number){
let left:number = 0;
let right:number = arr.length-1;

while(left<=right){
    const mid = Math.floor((left+right)/2);

    if(arr[mid]===targetValue){
        return mid;
    }
    else if(arr[mid]<targetValue){
        left = mid + 1;
    }
    else{
        right = left -1;
    }
}

return -1;
}


let array:number[] = [1,2,3,4,5,6,7,8,9,10];
let ValueToFind:number = 48;

const Result = binarySearch(array,ValueToFind);

if (Result !== -1) {
    console.log(`Element ${ValueToFind} found at index ${Result}.`);
  } else {
    console.log(`Element ${ValueToFind} not found in the array.`);
  }