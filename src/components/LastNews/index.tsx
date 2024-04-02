import './style.css';
import LastNewsItem from './LastNewsItem';
import IPostData from '../../types/Posts.types';
import { useState, useEffect } from 'react';
import PostService from '../../services/Posts.service';
import { Order } from '../common';

export default function LastNews() {
  const qntLimitOfCards = 4;

  const [posts, setPosts] = useState<Array<IPostData>>([]);
  useEffect(() => {
    getPosts();
  }, []);

  const lastNews = posts.slice(0, qntLimitOfCards);

  const getPosts = () => {
    PostService.getAllOrderedByDate(Order.ASC)
      .then((response: any) => {
        setPosts(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <div className="last-news-main flex-column">
      <span>Últimas notícias</span>
      <div className="last-news-items flex-column">
        {posts &&
          lastNews.map((post, index) => (
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
