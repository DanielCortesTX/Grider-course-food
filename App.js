import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default createAppContainer(navigator)

// yGr1XhhAuCgtl7kdkM8QWQ

// d0wA6NYuWiNnQMMgCmP4FpZQODut69ME8FcyE8IaldAExm8AJCUXtiNd52NUZ6q-dNaSN73BXRrQ55ZYEN84GzUGy8RJTpHeceV_xo_Ep0L9o-OQu2rMXkxwivveXXYx