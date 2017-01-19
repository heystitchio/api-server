import casual from 'casual';

const Mocks = {
  Query: () => ({
    author: (root, args) => {
      return { 
        id: args.id,
        username: casual.username,
        email: casual.email
      };
    },
  }),
  Author: () => ({ 
    id: casual.integer(1111,9999),
    username: casual.username,
    email: casual.email
  }),
  Post: () => ({ 
    title: casual.title, 
    text: casual.sentences(2) 
  }),
};

export default Mocks;
