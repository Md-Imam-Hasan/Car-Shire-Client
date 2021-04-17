import React from 'react';
import news1img from '../../../images/team3.jpg';
import news2img from '../../../images/parts.jpg';
import NewsCard from '../NewsCard/NewsCard';

const latestNews = [
  {
    title: "New Car Arrivals",
    time: "March 15, 2021",
    discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, tempora nihil...",
    image: news1img
  },
  {
    title: "Replace New Parts",
    time: "March 17, 2021",
    discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, tempora nihil...",
    image: news2img
  }
]

const News = () => {
  return (
    <section className='news'>
      <div className="container">
        <h1 className="mb-5 text-center">Latest News From Our Blog</h1>
        <div className="row mt-5">
          {
            latestNews.map(news => <NewsCard news={news}></NewsCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default News;