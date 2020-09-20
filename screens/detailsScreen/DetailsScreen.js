import React from 'react';
import {FlatList, View, Image} from 'react-native';
import {MiniCard, NestedText} from '../../components';
import styles from './styles';

const DetailsScreen = (props) => {
  const renderListItem = (itemData) => {
    const {name, image} = itemData.item;
    if (name) {
      return <MiniCard name={name} image={image} />;
    } else {
      return null;
    }
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
      {image ? (
        <Image
          style={styles.image}
          source={{uri: image, width: styles.image.height}}
        />
      ) : null}
      <NestedText reference="Name: ">{name}</NestedText>
      {dimension ? (
        <NestedText reference="Dimension: ">{dimension}</NestedText>
      ) : null}
      {episode ? (
        <NestedText reference="Episode: ">{episode}</NestedText>
      ) : null}
      {type ? <NestedText reference="Type: ">{type}</NestedText> : null}
      {gender ? <NestedText reference="Gender: ">{gender}</NestedText> : null}
      {species ? (
        <NestedText reference="Species: ">{species}</NestedText>
      ) : null}
      {created ? (
        <NestedText reference="Created: ">{created}</NestedText>
      ) : null}
      {image ? null : (
        <View style={styles.imageList}>
          <FlatList
            data={episode ? characters.slice(0, 5) : residents.slice(0, 5)}
            keyExtractor={(item, index) => item.id}
            renderItem={renderListItem}
            numColumns={1}
          />
        </View>
      )}
    </View>
  );
};

DetailsScreen.navigationOptions = (navigationData) => {
  const item = navigationData.navigation.getParam('item');
  return {
    headerTitle: item.name,
  };
};

export default DetailsScreen;
