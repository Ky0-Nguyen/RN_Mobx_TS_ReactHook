import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export interface AppProps {
}

export interface AppState {
}

export default class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
    }
  }

  public render() {
    return (
      <View style={{ backgroundColor: 'green' }}>
        <Text>App Component</Text>
      </View>
    )
  }
}
