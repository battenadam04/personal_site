import { gql } from "@apollo/client";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      data {
        attributes {
          slug
          title
          category {
            data {
              attributes {
                slug
                name
              }
            }
          }
          cover {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default ARTICLES_QUERY;