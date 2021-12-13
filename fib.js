// 1,1,2,3,5,8,13
// print the nth term of the fib sequence

//iterative solution
function fib (n) {
    var firstNum = 0;
    var secondNum = 1
    var val;
    var counter = 1;

    if (n <= 2) {
        return 1;
    }

    while (counter < n) {
        
        val = firstNum + secondNum;
        counter ++;
        firstNum = secondNum;
        secondNum = val;
        
    }

    return val;
}

// console.log(fib(2));
// console.log(fib(100000));

// recursive solution
function fib2 (n) {
    
    // base condition
    if (n <= 1) {
        return n;
    } 
    else {
        return fib2 (n - 1) + fib2(n - 2);
    }

}

console.log(fib2(2));
console.log(fib2(10000));
