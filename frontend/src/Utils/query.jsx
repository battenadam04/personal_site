import React from "react";
import { useQuery } from "@apollo/client";


const Query = ({ children, query, slug }) => {

  const { loading, error, data } = useQuery(query, {
    variables: { slug: slug },
  });

console.log(data, loading, error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;