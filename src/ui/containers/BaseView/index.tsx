import React, {
    PureComponent,
    ReactChild,
    ReactElement,
    ReactText,
} from 'react'
import {
    StatusBar,
    StyleSheet,
    View,
} from 'react-native'

import get from 'lodash/get'
import configStore from 'mbx/stores/configStore'
import { height, width } from 'utils/globalConstants'
import Headr from './Header'

export interface AppProps {
    title?: string,
    isBack?: boolean,
    isRight?: boolean,
    isHeader?: boolean,
    childColor?: string,
    colors?: ReactText[],
    children?: ReactChild,
    leftAction?: () => void,
    rightAction?: () => void,
    isLinearGradient?: boolean,
    onSubRightAction?: () => void,
    CustomRight?: () => ReactElement,
}

function BaseView(props: AppProps) {
    const {
        title,
        isBack,
        children,
        isRight,
        isHeader,
        leftAction,
        childColor,
        rightAction,
        CustomRight,
        isLinearGradient = false,
        colors = ['#4c669f', '#3b5998', '#192f6a'],
    } = props

    const appConfig = configStore.appConfig
    const primaryColor = get(appConfig, 'themeConfig.colors.primaryColor')

    return (
        <View style={styles.base}>
            <StatusBar
                barStyle='light-content'
                backgroundColor={primaryColor}
            />
            {isHeader &&
                <Headr
                    title={title}
                    isBack={isBack}
                    colors={colors}
                    isRight={isRight}
                    leftAction={leftAction}
                    childColor={childColor}
                    CustomRight={CustomRight}
                    rightAction={rightAction}
                    backgroundColor={primaryColor}
                    isLinearGradient={isLinearGradient}
                />
            }
            <View style={[styles.base, { backgroundColor: primaryColor }]}>
                {children}
            </View>
        </View >
    )
}

export default BaseView
const styles = StyleSheet.create({
    base: {
        flex: 1,
    },
    containerBlur: {
        zIndex: 10,
        marginLeft: -20,
        width: width(100),
        height: height(100),
        position: 'absolute',
    },
})
