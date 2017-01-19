const typeDefinitions = `
    type Author {
      id: Int
      username: String
      email: String
      posts: [Post]
    }

    type Post {
      id: Int
      title: String
      text: String
      views: Int
      author: Author
    }

    type Query {
      author(id: Int): Author
    }

    type Mutation {
      author(id: Int): Author
    }

    schema {
      query: Query
      mutation: Mutation
    }
  `;

export default [typeDefinitions];
