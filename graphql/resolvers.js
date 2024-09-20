const Movie = require("./../models/movieModel");
const Genre = require("./../models/genreModel"); 
const resolvers = {
  Query: {
    getMovies: async () => {
      try {
        const res = await Movie.find().populate("genre");
        return res;
      } catch (error) {
        console.error("Error fetching movies:", error);
        throw new Error("Failed to fetch movies");
      }
    },
    getMovie: async (_, { id: resById }) => {
      console.log(resById);
      return Movie.findById(resById).populate("genre");
    },
    getAllGenres: async () => {
      return await Genre.find();
    }
  
  },
  Mutation: {
    // CreateGenre: async (_, args) => {
    //   // .create --> need to object of key and value will returned from like body or param
    //   //.create ({ name:req.body.name}) /// here i pass a args is in param for mutuion in type defs and here
    //   // in resolver fun (args i take this params)
    //   // oh oh oh here i not know how many of params will come so i should make
    //   // ...args
    //   // let's try
    //   // -->  (_, ...args)===> i used rest because i don't know how many of params will come
    //   //const genre = await Genre.create({args});
    //   //---> doesn't work


    //   // let's try this

    //   // in param (name:String , age:Int) ---> i think this is object
    //   // --> (_, {...args})
    //   // --> const genre = await Genre.create({args});
    //   // also retun null

    //   //    CreateGenre: async (_, {...args}) => {
    //   //  const genre = await Genre.create({...args});
      
    //   //this senario work
      
      
         CreateGenre: async (_, args) => {
     
      console.log(args)
      const {name } = args;
      // const genre = await Genre.create({...args});
      const genre = await Genre.create({name});
      return genre;
    },
   

    CreateMovie: async (_,  args ) => {
      try {
        // console.log(input);
        // console.log(input.genre);
        // if (!Array.isArray(input.genre)) {
        //   throw new Error("Genre must be an array");
        // }
        const film = await Movie.create({ ...args.input });
        // تأكد من استخدام execPopulate للتأكد من أن populate يعمل بشكل صحيح
        return film.populate('genre');
      } catch (error) {
        console.error("Error creating movie:", error);
        throw new Error("Failed to create movie");
      }
    }
  }
}
module.exports = resolvers;