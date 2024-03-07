function sort(a)
{
    const n=a.length;
        let temp = 0;
        for(i = 0; i < n-1; i++) {
            for (j = 0; j < n - i - 1; j++) {
                if (a[j] > a[j + 1]) {
                    temp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = temp;
                }
            }
        }
        return a;
}
const arr=[5,3,7,1,6,2]
console.log(arr)
sortArray=sort(arr)
console.log(sortArray)