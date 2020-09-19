import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ListsTabNavigator from './ListsTabNavigator';
import {DetailsScreen, PresentationScreen} from '../screens';
import {theme} from '../styled/theme';

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
        backgroundColor: theme.color.primaryDark,
      },
      headerTintColor: theme.color.selectedTab,
      animationEnabled: true,
    },
  },
);

export default createAppContainer(AppNavigator);
