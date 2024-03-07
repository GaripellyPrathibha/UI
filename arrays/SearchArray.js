function search(a,s)
{
  const n=a.length
        for(i=0;i<n;i++)
        {
            if(a[i]==s)
            {
               console.log(" Found "+s+" at "+(i+1));
            }
        }
}
const arr=[5,3,7,1,6,2]
const s=7
console.log(arr)
searchArray=search(arr,s)