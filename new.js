var obj = New(A, 1, 2);

function New(fn) {
    var obj = {}
    obj._proto__ = fn.prototype
    let args = Array.prototype.slice.call(arguments, 1)
    let ret = fn.call(obj, args)
    if(ret) return ret
    // if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
    //     return ret;
    // }
    return res;
}



function f(a) {
    
    this.a = a

}
var o = new f('a')