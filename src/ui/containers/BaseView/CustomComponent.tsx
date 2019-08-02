import React, { ReactNode, ReactText } from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface AppProps {
    styles?: object,
    children: ReactNode,
    colors: ReactText[],
    isLinearGradient?: boolean,
}

function CustomComponent(props: AppProps) {
    const {
        styles,
        colors,
        isLinearGradient = false,
    } = props

    return (
        !isLinearGradient
            ? <View style={styles}>
                {props.children}
            </View>
            : <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={colors}
                style={styles}
            >
                {props.children}
            </LinearGradient>
    )
}
export default CustomComponent
