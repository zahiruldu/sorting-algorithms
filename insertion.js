
function insertSort(arr) {
  let length = arr.length;
    for (let i = 1; i < length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = temp;
    }
    return arr;
}

let arr = [5,4,10,1,6,2];

let result = insertSort(arr);
console.log(result); // [ 1, 2, 4, 5, 6, 10 ]