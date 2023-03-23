import React from "react";
import Articles from "./articles";
import Query from "../../Utils/query";
import ARTICLES_QUERY from "../queries/articles";
import { Link } from "react-router-dom";

import CATEGORIES_QUERY from "../queries/categories";

const ArticleNav = () => {
  return (
                    <Query query={CATEGORIES_QUERY} id={null}>
                            {({ data: { categories } }) => {
                              return (
                                <div>
                                  <nav className="uk-navbar-container" data-uk-navbar>
                                    <div className="uk-navbar-center">
                                      <ul className="uk-navbar-nav">
                                        {categories.data.map((category) => {
                                          return (
                                            <li key={category.attributes.slug}>
                                              <Link
                                                to={`/Blog/category/${category.attributes.slug}`}
                                                className="uk-link-reset"
                                              >
                                                {category.attributes.name}
                                              </Link>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    </div>
                                  </nav>
                                </div>
                              );
                            }}
                          </Query>
  );
};

export default ArticleNav;