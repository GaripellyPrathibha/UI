function search(a)
{
    const n=a.length;
        let largest = a[0],smallest=a[0];
        for(i = 0; i < n; i++) {
                if (a[i] > largest ) {
                    largest=a[i]

                }
                if(a[i]<smallest)
                {
                    smallest=a[i]
                }
        }

        console.log(largest,smallest);

}
const arr=[5,3,7,1,6,-1]
console.log(arr)
search(arr)