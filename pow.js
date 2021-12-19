function myPow(base,exp) {
    if (exp === 0) return 1;
    if (exp === 1) return base;
    if (base === 1) return base;
    if (base === 0) return base;
    if (exp < 0) return myPow(1/base, -exp);

    let output = myPow(base * base, Math.floor(exp/2));
    if (exp%2 === 1) {
        output = output * base;
    }

    return output;
}

console.log(myPow(3,4));