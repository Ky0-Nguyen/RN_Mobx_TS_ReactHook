// gets the current screen from navigation state
function getCurrentRouteName(navigationState: {
    routes: {
        [x: string]: any;
    };
    index: string | number;
}): any {
    if (!navigationState) {
        return null
    }
    const route = navigationState.routes[navigationState.index]
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route)
    }
    return route.routeName
}
export default getCurrentRouteName
