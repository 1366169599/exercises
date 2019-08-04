// 三种状态
const PENDING = Symbol('pending')
const FULFILLED = Symbol('fulfilled')
const REJECTED = Symbol('reject')


function Promise(fn) {
    this.value = null // 返回值
    this.state = PENDING
    this.resolvedCb = []
    this.rejectedCb = []



    function fulfill(result) {
        this.state = FULFILLED
        this.value = result

        for (var i = 0; i < this.resolvedCb.length; i++) {
            this.resolvedCb[i](result)
        }
    }

    // 完成时调用的方法，这里做了容错
    function resolve(result) {
        try {
            fulfill.call(this, result)
        } catch (err) {
            reject(err)
        }
    }

    // 拒绝时调用的方法
    function reject(error) {
        this.state = REJECTED
        this.value = error
    }

    fn(resolve.bind(this), reject.bind(this))
}




Promise.prototype.then = function (handleSuccess, handleFail) {
    var self = this;

    var PromiseStatus = this.state;

    // if (typeof handleSuccess === 'function') {
    //     handleSuccess = handleSuccess;
    // } else {
    //     handleSuccess = function (result) {}
    // }

    // if (typeof handleFail === 'function') {
    //     handleFail = handleFail;
    // } else {
    //     handleFail = function (err) {}
    // }

    if (PromiseStatus === PENDING) {
        return new Promise(function (resolve, reject) {
            self.resolvedCb.push(handleSuccess);
            self.rejectedCb.push(handleFail);
        })
    }

    if (PromiseStatus === FULFILLED) {
        return new Promise(function (resolve, reject) {
            var result = handleSuccess(self.value);
            resolve(result);
        })
    }

    if (PromiseStatus === 'rejected') {
        return new Promise(function (resolve, reject) {
            var result = handleFail(self.PromiseValue);
            reject(result);
        })
    }

}

var a = new Promise((resolve, reject) => {
    console.log(111);
    setTimeout(() => {
        resolve('123')
    }, 1000)
})
a.then((res) => {
    console.log(res);
})








console.log(a)