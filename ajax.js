    //封装一个ajax请求
    function ajax(options) {
        //创建XMLHttpRequest对象
        if (window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest
        } else {
            var xhr = new ActiveXObject()
        }

        //初始化参数的内容
        options = options || {}
        options.type = (options.type || 'GET').toUpperCase()
        options.dataType = options.dataType || 'json'
        var params = options.data

        //发送请求
        if (options.type == 'GET') {
            xhr.open('GET', options.url + '?' + params, true)
            xhr.send(null)
        } else if (options.type == 'POST') {
            xhr.open('POST', options.url, true)
            xhr.send(params)
            // xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded")//规定输出为键值对的形式
        }

        //接收请求
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var status = xhr.status
                if (status >= 200 && status < 300) {
                    options.success && options.success(xhr.responseText, xhr.responseXML)
                } else {
                    options.fail && options.fail(status)
                }
            }
        }
    }

    ajax({
        type: 'post',
        dataType: 'json',
        data: {},
        url: 'https://www.easy-mock.com/mock/5bbd92e0004caf3b6a68db6f/example/api/countEventsLevel',
        success: function (text, xml) { //请求成功后的回调函数
            console.log(text)
        },
        fail: function (status) { ////请求失败后的回调函数
            console.log(status)
        }
    })