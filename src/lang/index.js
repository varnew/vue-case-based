import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
/** 处理element-ui */
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
/** 语言文件 */
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
    en: {
        ...enLocale,
        ...elementEnLocale
    },
    zh: {
        ...zhLocale,
        ...elementZhLocale
    }
}
/** 获取当前语言 */
export function getLanguage() {
    // 获取当前语言，有即返回
    const chooseLanguage = Cookies.get('language')
    if (chooseLanguage) return chooseLanguage
    // 获取当前网页语言
    const language = (navigator.language || navigator.browserLanguage).toLowerCase()
    // 获取所支持的所有语言
    const locales = Object.keys(messages)
    // 如果网页语言和可选语言有重合，即采用
    for (const locale of locales) {
        if (language.indexOf(locale) > -1) {
            return locale
        }
    }
    // 默认返回语言
    return 'en'
}
/** 实例化 */
const i18n = new VueI18n({
    // set locale
    // options: en | zh | es
    locale: getLanguage(),
    // set locale messages
    messages
})

export default i18n
