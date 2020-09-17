import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
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
      activeTintColor: '#8bcf21',
      inactiveTintColor: 'black',
      pressColor: 'gray',
      style: {
        backgroundColor: '#8bcf21',
      }
    },
  },
);
export default ListsTabNavigator;