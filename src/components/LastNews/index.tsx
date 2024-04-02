import './style.css';
import LastNewsItem from './LastNewsItem';
import IPostData from '../../types/Posts.types';
import { useState, useEffect } from 'react';
import PostService from '../../services/Posts.service';
import { Order } from '../common';

export default function LastNews() {
  const qntLimitOfCards = 4;

  const [lastNews, setLastNews] = useState<Array<IPostData>>([]);
  useEffect(() => {
    getLastNews();
  }, []);

  const getLastNews = () => {
    PostService.getAllOrderedByDate(Order.ASC)
      .then((response: any) => {
        setLastNews(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const firstLastNews = lastNews.slice(0, qntLimitOfCards);

  return (
    <div className="last-news-main flex-column">
      <span>Últimas notícias</span>
      <div className="last-news-items flex-column">
        {firstLastNews &&
          firstLastNews.map((post, index) => (
            <LastNewsItem
              key={index}
              title={post.title}
              date={post.created_at}
            />
          ))}
      </div>
    </div>
  );
}
