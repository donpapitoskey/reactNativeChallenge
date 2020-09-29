import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {theme} from '../styled/theme';
import {ListScreen} from '../screens';

const ListsTabNavigator = createMaterialTopTabNavigator(
  {
    Characters: {screen: ListScreen},
    Locations: {screen: ListScreen},
    Episodes: {screen: ListScreen},
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: theme.color.primaryDark,
      pressColor: theme.color.selectedTab,
      indicatorStyle: {
        backgroundColor: 'white',
      },
      style: {
        backgroundColor: theme.color.primary,
      },
    },
  },
);
export default ListsTabNavigator;
