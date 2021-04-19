var Message = {}
Message.install = function (Vue, options) {
    // 1. 添加全局方法或 property
    Vue.myGlobalMethod = function () {
        // 逻辑...
        console.log('----------')
        console.log('options', options)
        console.log('----------')
    }

    // 2. 添加全局资源
    // Vue.directive('my-directive', {
    //     bind(el, binding, vnode, oldVnode) {
    //         // 逻辑...
    //     }
    // })

    // 3. 注入组件选项
    Vue.mixin({
        created: function () {
            // 逻辑...
        }
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
        console.log('msd', methodOptions)
    }
}

export default Message