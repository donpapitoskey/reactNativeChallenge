import React from 'react';
import {FlatList, Text, View, Image} from 'react-native';
import {MiniCard} from '../../components';
import styles from './styles';

const DetailsScreen = (props) => {
  const renderListItem = (itemData) => {
    const {name, image} = itemData.item;
    return <MiniCard name={name} image={image} />;
  };

  const {
    name,
    image,
    dimension,
    episode,
    type,
    gender,
    species,
    created,
    characters,
    residents,
  } = props.navigation.getParam('item');
  
  return (
    <View style={styles.screen}>
      {image ? <Image style={styles.image} source={{uri: image}} /> : null}
      <Text style={styles.title}>{name}</Text>
      {dimension ? <Text style={styles.subTitle}>{dimension}</Text> : null}
      {episode ? <Text style={styles.subTitle}>{episode} </Text> : null}
      {type ? <Text style={styles.subTitle}>{type} </Text> : null}
      {gender ? <Text style={styles.subTitle}>{gender} </Text> : null}
      {species ? <Text style={styles.subTitle}>{species} </Text> : null}
      {created ? <Text style={styles.subTitle}>{created} </Text> : null}
      <View style={{height: 600}}>
        <FlatList
          data={episode ? characters.slice(0, 5) : residents.slice(0, 5)}
          keyExtractor={(item, index) => item.id}
          renderItem={renderListItem}
          numColumns={1}
        />
      </View>
    </View>
  );
}

DetailsScreen.navigationOptions = (navigationData) => {
  const item = navigationData.navigation.getParam('item');
  return {
    headerTitle: item.name,
  };
};

export default DetailsScreen;