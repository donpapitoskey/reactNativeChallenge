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
      {image != null &&
        <Image
          style={styles.image}
          source={{uri: image, width: styles.image.height}}
        />}
      <NestedText reference="Name: ">{name}</NestedText>
      {dimension != null &&
        <NestedText reference="Dimension: ">{dimension}</NestedText>
      }
      {episode != null && (
        <NestedText reference="Episode: ">{episode}</NestedText>
      )}
      {type != null ? <NestedText reference="Type: ">{type}</NestedText> : null}
      {gender != null && <NestedText reference="Gender: ">{gender}</NestedText>}
      {species != null && (
        <NestedText reference="Species: ">{species}</NestedText>
      )}
      {created != null && (
        <NestedText reference="Created: ">{created}</NestedText>
      )}
      {image == null &&
        <View style={styles.imageList}>
          <FlatList
            data={
              episode != null ? characters.slice(0, 5) : residents.slice(0, 5)
            }
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
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default DetailsScreen;
