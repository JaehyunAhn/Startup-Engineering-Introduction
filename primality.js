#!/usr/bin/env node
var fs = require('fs');
var outfile = "primenumber.txt";
var count = 0;
var number = 2;
var target = 2;
var answer = new Array();

while (count != 100)
{
    var isprime = true;
    for( target = 2; target <= Math.sqrt(number); target++)
    {
        if( number % target == 0 ) { isprime = false; }
    }
    
    if( isprime )
    {
        answer.push(number);
        count++;
    }
    number++;
}

var out = "";
for( target = 0; target < 100; target ++)
{
    if(target == 0)
    {  out = answer[target]; }
    else
    { out = (out + "," + answer[target]); }
}

console.log(out);
fs.writeFileSync(outfile, out);
