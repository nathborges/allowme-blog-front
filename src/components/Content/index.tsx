import './style.css';
import { Option, Order } from '../common';
import Dropdown from '../Dropdown';
import LastNews from '../LastNews';
import PostCard from '../PostCard';
import UsersService from '../../services/Users.service';
import IUserData from '../../types/Users.types';
import PostService from '../../services/Posts.service';
import { useEffect, useState } from 'react';
import IPostData from '../../types/Posts.types';
import NoPostsMessage from '../NoPostsMessage';

const dropdownDateFilterOptions: Option[] = [
  {
    label: 'Mais recentes',
    value: Order.DESC,
  },
  {
    label: 'Mais antigos',
    value: Order.ASC,
  },
];

export default function Content() {
  const [posts, setPosts] = useState<Array<IPostData>>([]);
  const [authorsOptions, setAuthorsOptions] = useState<Array<Option>>([]);

  useEffect(() => {
    getPostsByDate(Order.DESC);
    getAuthors();
  }, []);

  const getPostsByDate = (order: Order) => {
    PostService.getAllOrderedByDate(order)
      .then((response: any) => {
        setPosts(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const getPostsByAuthors = (userFilter: string) => {
    PostService.getAllByUser(userFilter)
      .then((response: any) => {
        setPosts(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const getAuthors = () => {
    UsersService.getAll()
      .then((response: any) => {
        mapUsersToAuthorsOption(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const mapUsersToAuthorsOption = (users: IUserData[]) => {
    const authors: Option[] = users.map((user: IUserData) => {
      return { label: user.full_name, value: user.username };
    });
    setAuthorsOptions(authors);
  };

  const handleAuthorFilterChange = (value: string) => {
    getPostsByAuthors(value);
  };

  const handleOrderFilterChange = (value: string) => {
    const orderTyped: Order = value as Order;
    getPostsByDate(orderTyped);
  };

  return (
    <div className="content-main-container flex-column">
      <div className="content-dropdown-container">
        <Dropdown
          defaultLabel={'Todos os autores'}
          options={authorsOptions}
          onDropdownSelected={handleAuthorFilterChange}
        />
        <Dropdown
          defaultLabel={'Mais recentes'}
          options={dropdownDateFilterOptions}
          onDropdownSelected={handleOrderFilterChange}
        />
      </div>
      <div className="content-content-container">
        <div className="posts-content-container">
          <hr className="post-divider" />
          {posts.length !== 0 &&
            posts.map((post, index) => (
              <PostCard
                key={index}
                title={post.title}
                content={post.body}
                name={post.user.full_name}
                date={post.created_date}
              />
            ))}
          {posts.length === 0 && <NoPostsMessage />}
        </div>
        <div className="last-news-content-container">
          <LastNews />
        </div>
      </div>
    </div>
  );
}
