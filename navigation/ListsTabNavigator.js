import { createBottomTabNavigator } from 'react-navigation-tabs';
import CharactersScreen from '../screens/CharactersListScreen';
import LocationsScreen from '../screens/LocationsListScreen';
import EpisodesScreen from '../screens/EpisodesListScreen';


const ListsTabNavigator = createBottomTabNavigator({
    Characters: { screen: CharactersScreen },
    Locations: { screen: LocationsScreen },
    Episodes: { screen: EpisodesScreen }
},
{
  tabBarOptions: {

    activeTintColor: "#8bcf21",
    style:{
      alignItems:"center"
    },
    inactiveTintColor: "grey",
    showLabel: true
  },
  animationEnabled: true
}
);



export default ListsTabNavigator;