import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
  query Category($slug: String!) {
    categories(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          name
          articles {
            data {
              attributes {
                slug
                title
                category {
                  data {
                    attributes {
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
      }
    }
  }
`;

export default CATEGORY_ARTICLES_QUERY;