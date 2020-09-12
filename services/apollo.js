import { ApolloClient, InMemoryCache } from '@apollo/client'

let client = new ApolloClient({ 
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache()
});

export default client;