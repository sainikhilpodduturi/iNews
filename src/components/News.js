import React, { useState, useEffect } from "react";
import NewsComponent from "./NewsComponent";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    const getData = async () => {
      props.setProgress(30);
      setLoading(true);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pagesize=${props.pageSize}`;
      let data = await fetch(url);
      data = await data.json();
      props.setProgress(50);
      setArticles(data.articles);
      setLoading(false);
      setTotalResults(data.totalResults);
      props.setProgress(100);
    };
    getData();
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    data = await data.json();
    setArticles(articles.concat(data.articles));
    setPage(page + 1);
  };

  return (
    <div>
      <h1 className="text-center" style={{ marginTop: "70px" }}>
        iNews - Top {capitalize(props.category)} Headlines
      </h1>
      {loading && <Spinner mode={props.mode}/>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner mode={props.mode}/>}
      >
        <div className="container my-4">
          <div className="row">
            {articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsComponent
                  mode={props.mode}
                    title={
                      element.title.length >= 40
                        ? element.title.slice(0, 40) + "..."
                        : element.title
                    }
                    author={element.author}
                    time={element.publishedAt}
                    newsUrl={element.url}
                    imgUrl={element.urlToImage}
                    description={
                      element.description
                        ? element.description.length >= 88
                          ? element.description.slice(0, 88) + "..."
                          : element.description
                        : ""
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
