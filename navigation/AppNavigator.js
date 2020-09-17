import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ListsTabNavigator from './ListsTabNavigator';
import {DetailsScreen, PresentationScreen} from '../screens';

const AppNavigator = createStackNavigator({
    Presentation: {
      screen: PresentationScreen,
      navigationOptions:{
        headerShown: false,
      },
    },
    Lists: ListsTabNavigator,
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        headerShown: true,
      },
    },
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      headerShown: false,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white',
      animationEnabled: true,
    },
  },
);

export default createAppContainer(AppNavigator);
