
import { Dimensions } from 'react-native'

const CORE_RATIO = 667 / 375
export const MYWIDTH = Dimensions.get('window').width
export const MYHEIGHT = Dimensions.get('window').height
const MYSCALE = CORE_RATIO / (MYHEIGHT / MYWIDTH)
const guidelineBaseWidth = 375
const guidelineBaseHeight = 667

export const width = (num: number) => MYWIDTH * (num / 100)
export const height = (num: number) => MYHEIGHT * (num / 100)
export const scale = (size: number) => MYWIDTH / guidelineBaseWidth * size
export const verticalScale = (size: number) => MYHEIGHT / guidelineBaseHeight * size
export const heightScale = (num: number) => MYHEIGHT * (num * MYSCALE / 100)

export const Colors = {
    main: '#ffffff',
}

export const STORE_KEY = {
    TOKEN: 'TOKEN',
    CURRENT_TIME: 'CURRENT_TIME',
}

export const ROUTE_KEY = {
    HOME: 'HOME',
    SPLASH: 'SPLASH',
    AUTHEN: 'AUTHEN',
    LOGIN: 'LOGIN',
}
