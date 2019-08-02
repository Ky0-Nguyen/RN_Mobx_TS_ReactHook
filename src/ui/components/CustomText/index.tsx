import React, { } from 'react'
import { Text, TextStyle } from 'react-native'

export interface AppProps {
    children: React.ReactChildren,
    style: TextStyle
}

function CustomText(props: AppProps) {
    const { children, style } = props
    return (
        <Text style={style}>
            {children}
        </Text>
    )
}
export default CustomText
