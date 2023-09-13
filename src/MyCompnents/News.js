import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const[articles, setarticles] = useState([])
  const[page, setpage] = useState(1)
  const[loading, setloading] = useState(false)
  const[totalResults, settotalResults] = useState(0)
  const[totalPages, settotalPages] = useState(1)


  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setprogress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&pageSize=${props.pageSize}&page=${page}`;
    setloading(true)
    let data = await fetch(url);
    props.setprogress(30);
    let parsedData = await data.json();
    props.setprogress(70);
    console.log(parsedData);
    props.setprogress(100);
    settotalResults(parsedData.totalResults)
    setarticles(parsedData.articles)
    setloading(false)
    settotalPages(Math.ceil(parsedData.totalResults / props.pageSize))
    setpage(page)
  }
  useEffect(() => {
    document.title = `${capitalize(props.category)}- Spider News`;

    updateNews();
  },[]);

  const fetchData = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&pageSize=${props.pageSize}&page=${page + 1}`;
    setpage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    settotalResults(parsedData.totalResults)
    setarticles(articles.concat(parsedData.articles))

  };

  return (
    <>
      <h1 className='text-center my-3'>
        Spider News - Top {capitalize(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={page < totalPages}
        loader={<Spinner />}
      >
        <div className='container my-4 mr-4'>
          <div className='row'>
            {articles.map((element) => {
              return (
                <div className='col-md-4 col-lg-4' key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ''}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : 'Click the below button to see the full description of the news '
                    }
                    imageUrl={element.urlToImage ? element.urlToImage : '/InTheNews2.jpg'}
                    newsUrl={element.url}
                    author={element.author}
                    time={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

export default News;