Function.prototype.call2 = function(content) {
    content.fn = this;
    let args = Array.prototype.slice.call(arguments, 1)

    let res = content.fn(...args)
    delete content.fn;
    return res
}
let foo = {
    value: 1
}
function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}
bar.call2(foo)
// call2();


Function.prototype.apply2 = function (context = window) {
    context.fn = this
    let result;
    // 判断是否有第二个参数
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}

// fn(...[1,2,3])
// fn(1,2,3)