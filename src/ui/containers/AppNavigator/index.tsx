import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation'

import HomeScreen from 'screens/Home'
import LoginScreen from 'screens/Login'
import SplashScreen from 'screens/Splash'

import navStore from 'mbx/actions/navStore'
import { ROUTE_KEY } from 'utils/globalConstants'
import AuthenScreen from '../Authen'
import transitionConfig from './transitionConfig'

function RootStack() {
  return createStackNavigator({
    [ROUTE_KEY.HOME]: { screen: HomeScreen },
    [ROUTE_KEY.LOGIN]: { screen: LoginScreen },
    [ROUTE_KEY.AUTHEN]: { screen: AuthenScreen },
    [ROUTE_KEY.SPLASH]: { screen: SplashScreen },
  }, {
      transitionConfig,
      headerMode: 'none',
      initialRouteName: ROUTE_KEY.AUTHEN,
    },
  )
}

const rootStack = RootStack()
const appContainer = createAppContainer(rootStack)
export default appContainer
