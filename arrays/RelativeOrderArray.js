function relativeOrder(a)
{
    const n=a.length;
        let z = 0;
        for ( i = 0; i < n; i++) {
            if (a[i] != 0) {
                temp = a[i];
                a[i] = a[z];
                a[z] = temp;
                z++;
            }
        }
        return a;
}
const arr=[0,2,0,3,5]
console.log(arr)
relativeArray=relativeOrder(arr)
console.log(relativeArray)