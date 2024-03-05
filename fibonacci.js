function fibonacci(N) {
    let i=0,j=1,k=0,c;
        for (c=0;c<N;c++)
        {
            console.log(i);
            k=i+j;
            i=j;
            j=k;
        }
}
fibonacci(5);