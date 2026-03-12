//1.Find the big number in the given two numbers
let a=20;
let b=50;
if (a>b)
{
    console.log(`a is big:${a}`);
}
else
 {   console.log(`b is big:${b}`);}
//2.find the biggest in the three numbers
let c=20;
let d=50;
let f=83;
if (c>d && c>f)
{
    console.log(`c is big:${c}`);
}
else if (d>c && d>f)
 {   console.log(`d is big:${d}`);}
else{
    console.log(`f is big ${f}`);
}
//3. sum of marks in [90,78,65,98]
let marks=[90,78,65,98];
let sum=0;
let min=marks[0];
for(let i=0;i<marks.length;i++)
{
    sum=sum+marks[i];
    if(marks[i]<min)
    {
        min=marks[i];
    }
}
console.log(`sum of marks=${sum}`);
console.log(`min of marks ${min}`);