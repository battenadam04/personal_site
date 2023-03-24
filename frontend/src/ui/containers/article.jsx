import React from "react";
import { useParams } from "react-router";
import Query from "../../Utils/query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

import ARTICLE_QUERY from "../queries/article";
import ArticleNav from '../components/articleNav';

const Article = () => {
  let { slug } = useParams();

  return (
  <div>
  <ArticleNav />
    <Query query={ARTICLE_QUERY} slug={slug}>
      {({ data: { articles } }) => {

        if (articles.data.length) {
        console.log(articles);
          const articleData = articles.data[0].attributes;
          console.log(articleData);
          const imageUrl =
            process.env.NODE_ENV !== "development"
              ? articleData.cover.data.attributes.url
              : process.env.REACT_APP_BACKEND_URL +
                articleData.cover.data.attributes.url;

          return (
            <div>
              <div
                id="banner"
                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                data-src={imageUrl}
                data-srcset={imageUrl}
                data-uk-img
              >
                <h1>{articleData.title}</h1>
              </div>

              <div className="uk-section">
                <div className="uk-container uk-container-expand">
                  <p>{articleData.author.data.attributes.name}
                    <Moment format="MMM Do YYYY" className="uk-padding-small">
                      {articleData.createdAt}
                    </Moment>
                    <Moment format="MMM Do YYYY" className="uk-padding-small">
                      {articleData.publishedAt}
                    </Moment>
                  </p>
                </div>
                    {/* format images to get correct image path in backend uploads */}
                  <ReactMarkdown
                    children={articleData.content}
                    transformImageUri={uri =>`${process.env.REACT_APP_BACKEND_URL}${uri}`}
                   />
              </div>
            </div>
          );
        }
      }}
    </Query>
    </div>
  );
};

export default Article;