import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'
import CharactersScreen from '../screens/CharactersListScreen';
import LocationsScreen from '../screens/LocationsListScreen';
import EpisodesScreen from '../screens/EpisodesListScreen';


const ListsTabNavigator = createBottomTabNavigator({
    Characters: CharactersScreen,
    Locations: LocationsScreen,
    Episodes: EpisodesScreen
});

export default ListsTabNavigator;