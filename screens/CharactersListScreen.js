import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { PanGestuteHandler } from 'react-native-gesture-handler';
import SearchBar from '../components/SearchBar';
import client from '../services/apollo';
import { useQuery, gql } from '@apollo/client';
import Card from '../components/Card';

const query = gql`
    query {
        characters (filter: {name: "Rick"} page: 1){
            info {
                count
                pages
                next
            }
            results{
                name
                gender
                species
                type
                image
            }
        }
    }

`;

const CharactersScreen = (props) => {

  let [arrayChars, setArrayCharsValue ] = useState([]);
  let [fetching, setFetchingValue ] = useState(false);
  

  onSearchHandler = (event) => {

    setFetchingValue(true);
    client.query({
      query
    })
      .then(({ data }) => {
        console.log(arrayChars)
        setArrayCharsValue(data.characters.results);
        setFetchingValue(false);
        
      })
      .catch((err) => {
        console.log(err)
      });

  };

  
  
  

  return (

    <View style={styles.screen}>
      <SearchBar />
      <Button title="get query" onPress={onSearchHandler} />
      <Text>Characters Screen</Text>
      {fetching ? <Text>Loading ...</Text> :
      <FlatList data={arrayChars} keyExtractor={(item,index) => item.name} renderItem={Card } numColumns={1}/>}
      <Button
        title="goto Details Screen"
        onPress={() => {
          props.navigation.navigate({ routeName: 'Details' });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30
    
  },
});

export default CharactersScreen;
