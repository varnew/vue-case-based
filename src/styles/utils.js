/** 修改主题的工具函数 */
export function changeTheme(themeObj) {
    const vars = Object.keys(themeObj).map(key => `--${key}:${themeObj[key]}`).join(';')
    document.documentElement.setAttribute('style', vars)
}

/** 蓝色主题-变量定义 */
export var blueTheme = {
    "main-bg-color": "blue",
}

/** 粉红色主题-变量定义 */
export var pinkTheme = {
    "main-bg-color": 'pink'
}