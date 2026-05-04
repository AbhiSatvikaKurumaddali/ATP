//version 1
let creategame=function(level,nameofplayer)
{
    console.log(`hello ${nameofplayer} your at level ${level}`)
}
creategame(2,"abhi");
creategame(1,"sravanya");
//version 2
let creategame1=function(n)
{
    return function(l)
    {
        console.log(`hello ${n} your at level ${l}`);
    }
}
let level=creategame1("abhi");
level(1);
level(2);
