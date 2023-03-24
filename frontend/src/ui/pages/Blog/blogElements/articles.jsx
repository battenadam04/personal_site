import React from "react";
import Articles from "../../../components/articles";
import Query from "../../../../Utils/query";
import ARTICLES_QUERY from "../../../queries/articles";

const AllArticles = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
            console.log('helloo',articles.data)
              return <Articles articles={articles.data} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default AllArticles;