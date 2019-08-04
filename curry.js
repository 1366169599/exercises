function multiFn(a, b, c) {
    return a * b * c;
}

function curry(fn, args) {
    let length = fn.length;// 3

    var args = args || [];
    return function() {
        newArgs = args.concat([...arguments]);
        
        if (newArgs.length < length) {
            return curry.call(this, fn, newArgs);
        } else {
            return fn(...newArgs);
        }


    }
}

let multi = curry(multiFn)


console.log(multi(2)(3)(4))
console.log(multi(2, 3, 4))
console.log(multi(2)(3, 4))
console.log(multi(2, 3)(4))