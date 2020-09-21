import React from 'react';
import {FlatList, View, Image} from 'react-native';
import {MiniCard, NestedText} from '../../components';
import styles from './styles';
import PropTypes from 'prop-types';

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
      {image &&
        <Image
          style={styles.image}
          source={{uri: image, width: styles.image.height}}
        />}
      <NestedText reference="Name: ">{name}</NestedText>
      {dimension &&
        <NestedText reference="Dimension: ">{dimension}</NestedText>
      }
      {episode && <NestedText reference="Episode: ">{episode}</NestedText>}
      {type ? <NestedText reference="Type: ">{type}</NestedText> : null}
      {gender && <NestedText reference="Gender: ">{gender}</NestedText>}
      {species && <NestedText reference="Species: ">{species}</NestedText>}
      {created && <NestedText reference="Created: ">{created}</NestedText>}
      {!image &&
        <View style={styles.imageList}>
          <FlatList
            data={episode ? characters.slice(0, 5) : residents.slice(0, 5)}
            keyExtractor={(item, index) => item.id}
            renderItem={renderListItem}
            numColumns={1}
          />
        </View>
      }
    </View>
  );
};

DetailsScreen.navigationOptions = (navigationData) => {
  const item = navigationData.navigation.getParam('item');
  return {
    headerTitle: item.name,
  };
};

DetailsScreen.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  dimension: PropTypes.string,
  episode: PropTypes.string,
  type: PropTypes.string,
  gender: PropTypes.string,
  species: PropTypes.string,
  created: PropTypes.string,
  characters: PropTypes.arrayOf({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
  residents: PropTypes.arrayOf({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
 };

export default DetailsScreen;
