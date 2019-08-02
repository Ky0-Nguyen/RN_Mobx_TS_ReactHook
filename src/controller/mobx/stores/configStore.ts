import { action, computed, observable } from 'mobx'
import { ConfigType, ThemeConfigType } from 'utils/globalTypes'

const initThemeConfig = {
    colors: {
        subColor: '#c3c3c3',
        textColor: '#484848',
        primaryColor: 'green',
        backgroundColor: 'red',
    },
}

class ConfigStore {
    @observable.ref public baseURL: string = ''
    @observable.ref public themeConfig: ThemeConfigType = initThemeConfig
    @action public setAppConfig(config: ConfigType) {
        this.baseURL = config.baseURL || ''
        this.themeConfig = config.themeConfig || initThemeConfig
    }
    @computed get appConfig() {
        const appConfig = {
            baseURL: this.baseURL,
            themeConfig: this.themeConfig,
        }
        return appConfig || {}
    }
}
const configStore = new ConfigStore()
export default configStore
