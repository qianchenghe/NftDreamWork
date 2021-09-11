import server from "./server"

function MyServer() {
    this.server = server
        // 初始化，存储当前组件的变量
    this.nowhandle = null
}
/**
 * @param {object} obj 组件实例
 */
MyServer.prototype.setThis = function(obj) {
        this.nowhandle = obj
            // 返回this，方便后面的链式操作
        return this
    }
    /**
     * @param {string} moduleName // 自定义的apI模块名称
     * @param {Object} urlObj // 存放api路径的对象
     */
MyServer.prototype.parseRouter = function(moduleName, urlObj) {
    this[moduleName] = {}
    Object.keys(urlObj).forEach(urlName => {
        // bind 指向 myserver
        this[moduleName][urlName] = this.sendMessage.bind(this, moduleName, urlName, urlObj[urlName])
        this[moduleName][urlName].state = 'ready'
    })
}

/**
 * @param {string} moduleName  API模块名称
 * @param {string} urlName  自定义接口名称
 * @param {string} url 当前请求的的地址
 * @param {object} config 接口传入的自定义参数
 */
MyServer.prototype.sendMessage = function(moduleName, urlName, url, config) {
    config = config || {}
    const headers = config.headers || {}

    // const token = localStorage.getItem("token");
    // if (!token && typeof(token) != "undefined") {} else {
    //     headers['Authorization'] = token
    // }

    // 默认化处理
    const addParam = config.addParam || ''
    const type = config.type || 'get'
    const params = config.params || {}
    const bindName = config.bindName || ''
    const repeat = config.repeat || false
    const self = this

    function defaultFn(res) {
        if (bindName !== '') {
            self.nowhandle[bindName] = res || {}
        }
    }
    const success = config.success || defaultFn

    function callback(res) {
        self[moduleName][urlName].state = 'ready'
        return success(res, defaultFn)
    }

    function defaultFailFn(error) {
        console.log(error)
    }
    const fail = config.fail || defaultFailFn;

    function failCallback(error) {
        self[moduleName][urlName].state = 'ready'
        return fail(error, defaultFailFn)
    }
    var state = {
        get: function() {
            self.server.get(url + addParam, { params, headers }).then(callback).catch(failCallback)
        },
        post: function() {
            self.server.post(url + addParam, params, { headers }).then(callback).catch(failCallback)
        },
        put: function() {
            self.server.put(url + addParam, params, { headers }).then(callback).catch(failCallback)
        },
        delete: function() {}
    }
    if (repeat) {
        state[type]()
    } else {
        if (self[moduleName][urlName].state == 'ready') {
            self[moduleName][urlName].state = 'pending'
            state[type]()
        }
    }
}

export default new MyServer()