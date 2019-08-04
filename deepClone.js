function deepClone(p, c) {
    c = c || {}
    for (var key in p) {
        if (typeof (p[key]) == "object") {
            let tem = p[key].constructor == Array ? [] : {}
            c[key] = tem
            deepClone(p[key], c[key])
        } else {
            c[key] = p[key]
        }
    }
    return c
}
var obj={name:'zy',arr:[1,2,3,{age:12},[1,4,2]]}
var obj1={colour:"red"}
console.log(deepClone(obj,obj1))
