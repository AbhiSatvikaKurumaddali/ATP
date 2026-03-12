// Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter
function sumofnumbers(...a)
{
    console.log(a)
    let sum=0;
    for(let i=0;i<a.length;i++)
    {
        sum=sum+a[i]
    }
    return sum;
}
console.log(sumofnumbers(1,2,3,4,5))