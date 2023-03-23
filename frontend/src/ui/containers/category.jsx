import React from "react";
import { useParams } from "react-router";
import Articles from "../components/articles";
import Query from "../../Utils/query";
import CATEGORY_ARTICLES_QUERY from "../queries/Categories/articles";
import ArticleNav from '../components/articleNav';
const Category = () => {
  let { slug } = useParams();

  return (
  <div>
      <ArticleNav />
    <Query query={CATEGORY_ARTICLES_QUERY} slug={slug}>
      {({ data: { categories } }) => {
        if (categories.data.length) {
          return (
            <div>
              <div className="uk-section">
                <div className="uk-container uk-container-large">
                  <h1>{categories.data[0].attributes.name}</h1>
                  <Articles articles={categories.data[0].attributes.articles.data} />
                </div>
              </div>
            </div>
          );
        }
      }}
    </Query>
    </div>
  );
};

export default Category;