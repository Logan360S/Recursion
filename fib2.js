// 1,1,2,3,5,8,13,21,34

function fib2 (n) {
    // base case
    if (n <= 1) {
        return n;
    } else {
        // console.log("n1 =>", fib2(n-1));
        // console.log("n2 =>", fib2(n-2));
        return fib2(n-1) + fib2(n-2);
    };

};

console.log(fib2(0));
console.log(fib2(1));
console.log(fib2(2));
console.log(fib2(4));
console.log(fib2(7));
console.log(fib2(9));

