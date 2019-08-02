import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import BaseView from 'containers/BaseView'
import { width } from 'utils/globalConstants'

export interface AppProps {
}

export function Modules(props: AppProps) {
    return (
        <BaseView>
            <View style={styles.container}>
                <Text>Modules</Text>
            </View>
        </BaseView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width(100),
        backgroundColor: 'transparent',
    },
})
