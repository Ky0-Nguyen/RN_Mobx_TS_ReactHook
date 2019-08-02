import * as React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

import I18n from 'assets/i18n'
import BaseView from 'containers/BaseView'
import configStore from 'mbx/stores/configStore'
import navStore from 'mbx/stores/navStore'

export interface AppProps {
}

export interface AppState {
}

function Login() {
    return (
        <BaseView
            isHeader
            title={I18n.t('login')}
        >
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    navStore.resetToHome()
                    configStore.setAppConfig({
                        themeConfig: {
                            colors: {
                                subColor: '#c3c3c3',
                                textColor: '#484848',
                                primaryColor: '#ffffff',
                                backgroundColor: 'red',
                            },
                        },
                    })
                }}>
                    <Text>App Component</Text>
                </TouchableOpacity>
            </View>
        </BaseView>
    )
}
export default Login
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
