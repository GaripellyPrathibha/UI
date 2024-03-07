function rotate(a, x) {
    const n = a.length;
    for (let i = 0; i < x; i++) {
        const temp = a[0];
        for (let j = 0; j < n - 1; j++) {
            a[j] = a[j + 1];
        }
        a[n - 1] = temp;
    }
    return a;
}

const arr=[1, 2, 3, 4, 5, 6, 7]
const x=2
console.log(arr)
const rotateArray=rotate(arr,x)
console.log(rotateArray)