function bubble(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i; j++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
            console.log(arr);
        }
    }
    return arr
}

var arr1 = [2, 5, 1, 67, 3, 56, 78]
console.log(bubble(arr1))