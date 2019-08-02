import { action, observable } from 'mobx'
import { enableLogging } from 'mobx-logger'
import { NavigationActions, StackActions } from 'react-navigation'
import { ROUTE_KEY } from 'utils/globalConstants'
import getCurrentRouteName from './getCurrentRouteName'

const config = {
  action: true,
  compute: true,
  reaction: true,
  transaction: true,
  predicate: () => true,
}
enableLogging(config)

class NavStore {
  @observable.ref public navigator: any = null
  @observable.ref public firstTimeLoaded = true
  @observable.ref public currentRouteName = ''

  /** -------------------------------------
  * @method - reset
  * @param -
  * @author - Nguyen Tuan / 2019-08-01 11:35:55
  * @description reset initial screen
  * ---------------------------------------*/
  public reset() {
    if (this.currentRouteName === ROUTE_KEY.HOME) { return }
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({ routeName: ROUTE_KEY.HOME }),
      ],
    })
    this.navigator.dispatch(resetAction)
  }

  /** -------------------------------------
  * @method - resetToHome
  * @param -
  * @author - Nguyen Tuan / 2019-08-01 10:15:17
  * @description function set inital screen is home
  * ---------------------------------------*/
  public resetToHome() {
    const resetAction = StackActions.reset({
      index: 0,
      key: null, // important
      actions: [
        NavigationActions.navigate({ routeName: ROUTE_KEY.HOME }),
      ],
    })
    this.navigator.dispatch(resetAction)
  }

  /** -------------------------------------
  * @method - resetToLogin
  * @param -
  * @author - Nguyen Tuan / 2019-08-01 10:15:49
  * @description function set inital screen is login screen
  * ---------------------------------------*/
  public resetToLogin() {
    const resetAction = StackActions.reset({
      index: 0,
      key: null, // important
      actions: [
        NavigationActions.navigate({ routeName: ROUTE_KEY.LOGIN }),
      ],
    })
    this.navigator.dispatch(resetAction)
  }

  /** -------------------------------------
  * @method - back
  * @param -
  * @author - Nguyen Tuan / 2019-08-01 10:16:06
  * @description back to previous screen
  * ---------------------------------------*/
  public back() {
    this.navigator.dispatch(NavigationActions.back())
  }

  /** -------------------------------------
  * @method - pushToScreen
  * @param - screen:  key screen, params:  if you wanna tranfer params from previous screen to next screen
  * @author - Nguyen Tuan / 2019-08-01 10:16:28
  * @description go to next screen via key
  * ---------------------------------------*/
  public pushToScreen(screen: string, params: any) {
    const navigateAction = NavigationActions.navigate({ routeName: screen, params })
    this.navigator &&
      this.navigator.dispatch(navigateAction)
  }

  /** -------------------------------------
  * @method - onNavigationStateChange
  * @param - prevState, currentState
  * @author - Nguyen Tuan / 2019-08-01 10:17:35
  * @description action save screen store
  * ---------------------------------------*/
  @action public onNavigationStateChange(prevState: any, currentState: any) {
    const currentScreen = getCurrentRouteName(currentState)
    this.currentRouteName = currentScreen
    console.log('currentScreen', currentScreen)
  }
}

const navStore = new NavStore()
export default navStore
