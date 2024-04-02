import axios from './axios.factory';
import IPostData from '../types/Posts.types';
import { Order } from '../components/common';

export const getAllOrderedByDate = (param: Order) => {
  return axios.get<Array<IPostData>>(`/posts/byDate?order=${param}`);
};

export const getAllByUser = (user: string) => {
    return axios.get<Array<IPostData>>(`/posts/byUser?username=${user}`);
  };

const PostService = {
  getAllOrderedByDate,
  getAllByUser,
};

export default PostService;
