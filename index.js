const numberOfFilms = +prompt('How many movies did you see?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {},
    genres: [],
    privat: false,
};
const a = prompt('What did you watch the last movie?', '');
const b = prompt('How are you value one?', '');
const c = prompt('What did you watch the last movie', '');
const d = prompt('How are you value one?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);