const Genre = require("../models/genreModel");
const Movie = require("../models/movieModel");

const UpdataManyFunc = async (model, condition, updateData) => {
  await model.updateMany(condition, updateData);
};

const resolvers = {
  Query: {
    getMovies: async () => {
      return await Movie.find().populate('genre');
    },
    getAllGenres: async () => {
      return await Genre.find();
    },
    getMovie: async (_, { id }) => {
      return await Movie.findById(id).populate('genre');
    }
  },
  Mutation: {
    CreateGenre: async (_, { name }) => {
      const newGenre = new Genre({ name });
      await newGenre.save();
      return newGenre;
    },
    CreateMovie: async (_, args) => {
      const { title, genre } = args;
      const newMovie = new Movie({ title, genre });
      await newMovie.save();
      await newMovie.populate('genre');
      return newMovie;
    },
    UpdateMovie: async (_, { id, title, genre }) => {
      const updatedMovie = await Movie.findByIdAndUpdate(id, { title, genre }, { new: true }).populate("genre");
      return updatedMovie;
    },
    DeleteMovie: async (_, { id }) => {
      const deleteMovie = await Movie.findByIdAndDelete(id);
      return !!deleteMovie;
    },
    DeleteMovieMany: async (_, { id }) => {
      await Movie.deleteMany({ _id: { $in: id } });
      return true;
    },
    UpdataMovieMany: async (_, { id, title }) => {
      await UpdataManyFunc(Movie, { _id: { $in: id } }, { title });
      return true;
    }
  }
};

module.exports = resolvers;
