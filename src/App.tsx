/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { useEffect } from 'react'
import {
  AppState,
  TextStyle,
  ViewStyle,
} from 'react-native'

import AppNavigator from 'containers/AppNavigator'
import authenStore from 'mbx/stores/authenStore'
import navStore from 'mbx/stores/navStore'
import { observer } from 'mobx-react'

interface InterfaceProps { }

interface InterfaceState {
}

let appState = 'active'
function handleAppState(nextAppState: string) {
  if (nextAppState === 'active') {
    authenStore.checkAuthen()
  }
  console.log('nextAppState', nextAppState)
  appState = nextAppState
}
function App() {
  useEffect(() => {
    AppState.addEventListener('change', handleAppState)
  })
  return (
    <AppNavigator
      onNavigationStateChange={(prev, next) => {
        navStore.onNavigationStateChange(prev, next)
      }}
      ref={(nav) => navStore.navigator = nav}
    />
  )
}
export default App
