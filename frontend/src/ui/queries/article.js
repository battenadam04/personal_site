import { gql } from "@apollo/client";

const ARTICLE_QUERY = gql`
  query Article($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          title
          description
          updatedAt
          createdAt
          content
          author {
            data {
              attributes {
                name
              }
            }
          }
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

export default ARTICLE_QUERY;