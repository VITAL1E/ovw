import React, { useEffect } from "react";
import FeedItem from "../../components/FeedItem";
import Item from "../../components/Item";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getSearchFeed } from "../../store/action-creators/searchFeed";

const SearchPage = () => {
  const { query } = useTypedSelector((state) => state.search);
  const { getSearchFeed } = useActions();
  const { productList, loading } = useTypedSelector(
    (state) => state.searchFeed
  );

  useEffect(() => {
    console.log("query ", query);
    console.log("productList ", productList);

    getSearchFeed(query!);
  }, []);

  return (
    <>
      <div className="search-play-icon"></div>
      <div className="search-hashtag-icon"></div>
      <h1 className="searched-text">Search word: {query}</h1>
      <h2 className="searched-result-numbers">
        <span>{productList.length}</span> items
      </h2>

      <div className="feed-items">
        {/* <FeedItem /> */}
        {/* {loading && <FeedItem />} */}
        {!loading &&
          //productList !== undefined &&
          //productList != [] &&
          Array.from(productList).map((item: any) => (
            <Item key={item.id} item={item} setIsItemOpen={() => {}} />
          ))}
      </div>
    </>
  );
};

export default SearchPage;
