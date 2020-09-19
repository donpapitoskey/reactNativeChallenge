import {gql} from '@apollo/client';

const Query = (props) => {
  const {typeOfSearch, searchingPage, searchName, searchType} = props;
  let searchCriteria = '';
  let requestProps = ``;
  switch (typeOfSearch) {
    case 'episodes':
      searchCriteria = `name: "${searchName}"`;
      requestProps = `
                    id
                    name
                    created
                    episode
                    characters{
                        id
                        name
                        image
                    }
                `
      break;
    case 'locations':
      searchCriteria = `name: "${searchName}" type: "${searchType}"`;
      requestProps = `
                    id
                    name
                    type
                    dimension
                    residents{
                        id
                        name
                        image
                    }
                `;
      break;
    case 'characters':
      searchCriteria = `name: "${searchName}" type: "${searchType}"`;
      requestProps = `
                    id
                    name
                    gender
                    species
                    type
                    image
          
                `
      break;
    default:
      searchCriteria = `name: "${searchName}" type: "${searchType}"`;
      requestProps = `
                    name
                    gender
                    species
                    type
                    image
          
                `;
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
  `);
  return query;
}

export default Query;