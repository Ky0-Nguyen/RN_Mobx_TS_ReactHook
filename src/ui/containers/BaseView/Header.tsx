
import React, { ReactElement, ReactText } from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Colors } from 'utils/globalConstants'
import { ISIOS, isIphoneX } from 'utils/globalFunctions'
import CustomComponent from './CustomComponent'

export interface AppProps {
    title?: string,
    isBack?: boolean,
    colors: ReactText[],
    isRight?: boolean,
    childColor?: string,
    leftAction?: () => void,
    rightAction?: () => void,
    backgroundColor?: string,
    isLinearGradient?: boolean,
    CustomRight?: () => ReactElement,
}

function Header(props: AppProps) {
    const {
        title,
        isBack,
        colors,
        isRight,
        childColor,
        leftAction,
        rightAction,
        CustomRight,
        backgroundColor,
        isLinearGradient,
    } = props
    return (
        <CustomComponent
            colors={colors}
            isLinearGradient={isLinearGradient}
            styles={[styles.header, { backgroundColor }]}>
            {isBack &&
                <TouchableOpacity style={styles.leftIcon}
                    onPress={leftAction}
                    hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                >
                    <FontAwesome name='chevron-left' style={{ color: childColor, fontSize: 17 }} />
                    <Text style={[styles.txtBack, { color: childColor }]}>{'Back'}</Text>
                </TouchableOpacity>
            }
            <View style={styles.titleContainer}>
                <Text style={[styles.textHeader, { color: childColor }]}>{title}</Text>
            </View>
            {
                isRight &&
                (
                    CustomRight
                        ? <CustomRight />
                        : <View style={styles.groubBtnRight}>
                            <TouchableOpacity onPress={rightAction}
                                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                            >
                                <FontAwesome name='bars' style={{ color: childColor, fontSize: 25 }} />
                            </TouchableOpacity>
                        </View>
                )
            }
        </CustomComponent>
    )
}
export default Header

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        height: ISIOS ? isIphoneX() ? 98 : 64 : 44,
        backgroundColor: Colors.main,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: ISIOS ? isIphoneX() ? 34 : 12 : 0,
    },
    textHeader: {
        fontSize: 16,
        color: 'white',
        fontWeight: '700',
    },
    leftIcon: {
        left: 10,
        width: 60,
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'center',
        paddingTop: ISIOS ? isIphoneX() ? 34 : 12 : 0,
    },
    groubBtnRight: {
        right: 15,
        paddingHorizontal: 10,
        height: '100%',
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: ISIOS ? isIphoneX() ? 34 : 12 : 0,
    },
    txtBack: {
        fontSize: 17,
        left: 10,
    },
})
