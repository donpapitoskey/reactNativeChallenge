import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import  PresentationScreen from '../screens/PresentationScreen';
import CharactersScreen from '../screens/CharactersListScreen';
import LocationsScreen from '../screens/LocationsListScreen';
import EpisodesScreen from '../screens/EpisodesListScreen';
import ListsTabNavigator from './ListsTabNavigator';
import DetailsScreen from '../screens/DetailsScreen';

const AppNavigator = createStackNavigator({
    Presentation: PresentationScreen,
    Lists: ListsTabNavigator,
    Details: DetailsScreen
});

export default createAppContainer(AppNavigator);
