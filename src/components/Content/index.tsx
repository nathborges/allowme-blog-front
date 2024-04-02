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
  const [order, setOrder] = useState<Order>(Order.ASC);
  const [userFilter, setUserFilter] = useState<string>('');

  useEffect(() => {
    getPosts();
    getAuthor();
  }, []);

  const getPosts = () => {
    PostService.getAllOrderedByDate(order)
      .then((response: any) => {
        setPosts(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const getPostsByAuthors = () => {
    PostService.getAllByUser(userFilter)
      .then((response: any) => {
        setPosts(response.data);
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

  const getAuthor = () => {
    UsersService.getAll()
      .then((response: any) => {
        mapUsersToAuthorsOption(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const handleAuthorFilterChange = (value: string) => {
    setUserFilter(value);
    getPostsByAuthors();
  };

  const handleOrderFilterChange = (value: Order) => {
    setOrder(value);
    getPosts();
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
          {posts &&
            posts.map((post, index) => (
              <PostCard
                key={index}
                title={post.title}
                content={post.body}
                name={post.user.full_name}
                date={post.created_at}
              />
            ))}
        </div>
        <div className="last-news-content-container">
          <LastNews />
        </div>
      </div>
    </div>
  );
}
