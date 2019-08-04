function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            } else {
                break
            }
        }
    }
    return arr
}

var arr1 = [2, 5, 1, 67, 3, 56, 78]
console.log(insertSort(arr1))