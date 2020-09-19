import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {theme} from '../styled/theme';
import {
  CharactersListScreen,
  LocationsListScreen,
  EpisodesListScreen,
} from '../screens';


const ListsTabNavigator = createMaterialTopTabNavigator(
  {
    Characters: {screen: CharactersListScreen},
    Locations: {screen: LocationsListScreen},
    Episodes: {screen: EpisodesListScreen},
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