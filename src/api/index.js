import myServer from '../utils/getRequest'
// https://webpack.js.org/guides/dependency-management/#requirecontext
const apiFiles = require.context('./modules', true, /\.js$/)
// you do not need `import login from './modules/login'`
// it will auto require all API module from modules file
apiFiles.keys().map(modulePath => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = apiFiles(modulePath)
    // myServer.parseRouter('login', login)
    myServer.parseRouter(moduleName, value.default)
})

export default myServer