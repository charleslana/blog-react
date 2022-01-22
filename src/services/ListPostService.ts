import api from '../api/api';
import IPost from '../models/IPost';

const listPostService = async (): Promise<IPost[]> => {
  let posts: IPost[] = [];

  await api
    .get('/data-blog.json')
    .then(response => {
      posts = response.data;
    })
    .catch(error => {
      if (error.response !== undefined) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
    });
  return posts;
};

export default listPostService;
