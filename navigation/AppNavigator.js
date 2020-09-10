import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PresentationScreen from '../screens/PresentationScreen';
import CharactersScreen from '../screens/CharactersListScreen';
import LocationsScreen from '../screens/LocationsListScreen';
import EpisodesScreen from '../screens/EpisodesListScreen';
import ListsTabNavigator from './ListsTabNavigator';
import DetailsScreen from '../screens/DetailsScreen';

const AppNavigator = createStackNavigator({
    Presentation: PresentationScreen,
    Lists: ListsTabNavigator,
    Details: {
        screen: DetailsScreen,
        navigationOptions:{
            headerShown: true
        }
    }
}, {
    mode: 'modal',
    defaultNavigationOptions: {
        headerShown: false,
        headerStyle: {
            backgroundColor: "black"
        },
        headerTintColor: "white",
        animationEnabled: true,

    }
});

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    }
}

export default createAppContainer(AppNavigator);
