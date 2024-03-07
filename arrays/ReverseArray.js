function reverseArray(arr) {
  const n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
  }
  return arr;
}
const myArray = [10,3,4,5,6];
console.log('Original array:', myArray);
const reversedArray = reverseArray(myArray);
console.log('Reversed array:', reversedArray);