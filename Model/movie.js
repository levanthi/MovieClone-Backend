import mongoose from 'mongoose';

const Movie = mongoose.Schema(
  {
    name: String,
    subName: String,
    thumbnail: String,
    background: String,
    type: String,
    year: String,
    season: String,
    duration: Number,
    IMDB: String,
    genres: Array,
    foundation: Array,
    country: Object,
    premiere: String,
    description: String,
    actors: Array,
    trailers: Array,
    episodes: Array,
    views: Object,
  },
  { timestamps: true }
);

const movieModel = mongoose.model('movies', Movie);
export default movieModel;
