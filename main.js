let number = Number(prompt("enter a number"));
let a = 0;

for (i=2;i<number;i++) {
    if (number % i == 0) {
        a = number;
    } 
}

if (a == 0 && number > 0) {
    document.write("Prime Number");
} else {
    document.write("Not a Prime Number");
}