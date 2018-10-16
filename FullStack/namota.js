let num = +process.argv[2];
if (!Number.isInteger(num)) {
  console.log("Please enter valid number");
  process.exit();
}
console.log('Using For Loop ..........................')
for (let i = 1; i <=10; i++) {
  console.log(` ${num} x ${i} = ${num*i} `);
}
console.log('Using While Loop .....................')
let i = 1;
while ( i<=10) {
  console.log(` ${num} x ${i} = ${num * i} `);
  i++;
}