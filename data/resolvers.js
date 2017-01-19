import { User } from './connectors';

const resolvers = {
  Query: {
    author(root, args){
      return { 
        id: 1, 
        username: 'helloworld',
        email: 'hello@world.com'
      };
    },
  },
  Author: {
    posts(author){
      return [
        { id: 1, title: 'A post', text: 'Some text', views: 2},
        { id: 2, title: 'Another post', text: 'Some other text', views: 200},
        { id: 3, title: 'Yet Another post', text: 'Some different text', views: 20}
      ];
    },
  },
  Post: {
    author(post){
      return { 
        id: 1, 
        username: 'helloworld',
        email: 'hello@world.com' 
      };
    },
  },
};

export default resolvers;
