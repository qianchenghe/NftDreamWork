import ElementUI from 'element-ui';

let loading;

function startLoading() {
    loading = ElementUI.Loading.service({
        lock: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0, 0.3)'
    })
}

function endLoading() {
    loading.close()
}

let needLoadingRequestCount = 0

export default {
    showFullScreenLoading() {
        if (needLoadingRequestCount === 0) {
            startLoading()
        }
        needLoadingRequestCount++
    },
    tryHideFullScreenLoading() {
        if (needLoadingRequestCount <= 0) return
        needLoadingRequestCount--
        if (needLoadingRequestCount === 0) {
            endLoading()
        }
    }
}