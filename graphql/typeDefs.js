const { gql } = require("apollo-server");

const typeDefs = gql`
  type Movie {
    id: ID
    title: String
    genre: [Genre]
  }
  
  type Genre {
    id: ID
    name: String
  }

  type Query {
    getMovies: [Movie]
    getAllGenres: [Genre]
    getMovie(id: ID): Movie
  }

  type Mutation {
    CreateGenre(name: String): Genre
    CreateMovie(title: String, genre: [ID]): Movie
    UpdateMovie(id: ID, title: String, genre: [ID]): Movie
    DeleteMovie(id: ID): Boolean
    DeleteMovieMany(id: [ID]): Boolean
    UpdataMovieMany(id: [ID], title: String): Boolean
  }
`;

module.exports = typeDefs;
