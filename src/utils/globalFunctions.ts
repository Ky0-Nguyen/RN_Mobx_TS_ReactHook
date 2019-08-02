import React from 'react'
import {
    Dimensions,
    Platform,
    StatusBar,
} from 'react-native'

// tslint:disable-next-line: no-var-requires
const reactNative = require('react-native')
const { Text, View } = reactNative

import AsyncStorage from '@react-native-community/async-storage'
export const ISIOS = Platform.OS === 'ios'

export function isIphoneX() {
    const dimen = Dimensions.get('window')
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
    )
}

export function ifIphoneX(iphoneXStyle: number, regularStyle: number) {
    if (isIphoneX()) {
        return iphoneXStyle
    }
    return regularStyle
}

export function getStatusBarHeight(safe: any) {
    return Platform.select({
        ios: ifIphoneX(safe ? 44 : 30, 20),
        android: StatusBar.currentHeight,
        default: 0,
    })
}

export function getBottomSpace() {
    return isIphoneX() ? 34 : 0
}

export async function getStoreData(key: string) {
    return await AsyncStorage.getItem(key)
}

export async function setStoreData(key: string, data: any) {
    return await AsyncStorage.setItem(key, data)
}

/** -------------------------------------
* @method - setCustomText
* @param -
* @author - Nguyen Tuan / 2019-08-01 15:42:51
* @description set global props of Text Component
* ---------------------------------------*/
export const setCustomText = (customProps: { style: any; }) => {
    const TextRender = Text.render
    const initialDefaultProps = Text.defaultProps
    Text.defaultProps = {
        ...initialDefaultProps,
        ...customProps,
    }
    Text.render = function render(props: { style: any; }) {
        const oldProps = props
        props = { ...props, style: [customProps.style, props.style] }
        try {
            return TextRender.apply(this, arguments)
        } finally {
            props = oldProps
        }
    }
}

/** -------------------------------------
* @method - setCustomView
* @param -
* @author - Nguyen Tuan / 2019-08-01 15:42:36
* @description set global props of View Component
* ---------------------------------------*/
export const setCustomView = (customProps: { style: any; }) => {
    const ViewRender = View.render
    const initialDefaultProps = View.defaultProps
    View.defaultProps = {
        ...initialDefaultProps,
        ...customProps,
    }
    View.render = function render(props: { style: any; }) {
        const oldProps = props
        props = { ...props, style: [customProps.style, props.style] }
        try {
            return ViewRender.apply(this, arguments)
        } finally {
            props = oldProps
        }
    }
}

export const themes = {
    light: {
        backgroundColor: '#eeeeee',
    },
    dark: {
        backgroundColor: '#222222',
    },
}

export const ThemeContext = React.createContext(
    themes.light, // default value
)
