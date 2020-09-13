import { gql } from '@apollo/client';

const Query = props => {
    const { typeOfSearch, searchingPage, searchName, searchType } = props
    let searchCriteria = '';
    let requestProps = ``
    switch (typeOfSearch) {
        case "episodes":
            searchCriteria = `name: "${searchName}"`
            requestProps =
                `
                    name
                    created
                    episode
                    characters{
                        name
                    }
          
                `
            break
        case "locations":
            searchCriteria = `name: "${searchName}" type: "${searchType}"`
            requestProps =
                `
                    name
                    type
                    dimension
                    residents{
                        name
                    }
          
                `
            break;
        case "characters":
            searchCriteria = `name: "${searchName}" type: "${searchType}"`
            requestProps =
                `
                    name
                    gender
                    species
                    type
                    image
          
                `
            break;
        default:
            searchCriteria = `name: "${searchName}" type: "${searchType}"`
            requestProps =
                `
                    name
                    gender
                    species
                    type
                    image
          
                `
            break;
                }
            
            let query = gql`
                    query {
                        ${typeOfSearch}(filter:{${searchCriteria}} page: ${searchingPage}) {
                            info {
                                count
                                pages
                                next
                            }
                            results{
                                ${requestProps}
                            }
                        }
                    }
            `
    console.log(`
    query {
        ${typeOfSearch}(filter:{${searchCriteria}} page: ${searchingPage}) {
            info {
                count
                pages
                next
            }
            results{
                ${requestProps}
            }
        }
    }
`)
                
    return query;
}

export default Query;