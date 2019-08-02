
export interface ThemeConfigType {
    colors: {
        subColor: string,
        textColor: string,
        primaryColor: string,
        backgroundColor: string,
    }
}

export interface ConfigType {
    baseURL?: string,
    themeConfig?: ThemeConfigType,
}
