import * as React from 'react';


import AllArticles from './blogElements/articles';
import ArticleNav from '../../components/articleNav';

import {BootstrapColumn, BootstrapRow} from "../../../Utils/BootstrapImportsUtils";
import Query from "../../../Utils/query";

const BlogPage = () => {
        return (
            <div>
                    <ArticleNav />
                    <AllArticles />
            </div>
        )
    }

export default BlogPage;