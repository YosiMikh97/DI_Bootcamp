//Daily_Challenge
// 1. Write a JavaScript program that recreates the pattern below.
// 2. Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
// 3. Do this Daily Challenge by youself, without looking at the answers on the internet.
for (let i = "*"; i.length<7; i=i+"*") {
    console.log(i);
}

for (let i = 0; i<8; i++) {
    for (let k = "*"; k.length<i;k=k+"*") {
        console.log(k);
    }
}