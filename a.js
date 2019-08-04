    // JS 判断设备来源
    function deviceType() {
        var ua = navigator.userAgent;
        var agent = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        for (var i = 0; i < len, len = agent.length; i++) {
            if (ua.indexOf(agent[i]) > 0) {
                break;
            }
        }
    }
    deviceType();
    window.addEventListener('resize', function () {
        deviceType();
    })


    // 微信的 有些不太一样
    function isWeixin() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }

