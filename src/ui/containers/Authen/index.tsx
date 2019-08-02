import React, { useEffect } from 'react'
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native'

import authenStore from 'mbx/stores/authenStore'

export interface AppProps {
}

export interface AppState {
}

// class Authen extends React.Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props)
//     authenStore.checkAuthen()
//   }

//   public render() {
//     return (
//       <View>
//         <StatusBar barStyle='default' />
//         <ActivityIndicator />
//       </View>
//     )
//   }
// }
function Authen() {
  useEffect(() => {
    authenStore.checkAuthen()
  })
  return (
    <View>
      <StatusBar barStyle='default' />
      <ActivityIndicator />
    </View>
  )
}
export default Authen
