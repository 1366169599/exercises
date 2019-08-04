function quockSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let left = []
    let right = []
    let tem = arr.splice(0,1)[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < tem) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quockSort(left).concat(tem,quockSort(right))
}
var arr1 = [2, 5, 1, 67, 3, 56, 78]
console.log(quockSort(arr1))