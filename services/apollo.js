import {ApolloClient, InMemoryCache} from 'apollo-boost';

let client = new ApolloClient({ 
    link: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache()
});

export default client;