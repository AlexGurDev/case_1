let numberOfFilms;
const start = () => {
    numberOfFilms = +prompt('How many movies did you see?', '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many movies did you see?', '');
    }
};
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {},
    genres: [],
    privat: false,
};

const rememberMyMovies = () => {
    for (let i = 0; i < 2; i++) {
        const a = prompt('What did you watch the last movie?', '');
        const b = prompt('How are you value one?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
};
// rememberMyMovies();
const detectPersonalLevel = () => {
    if (personalMovieDB.count < 10) {
        console.log('lack movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('you are classical watcher');
    } else if (personalMovieDB.count >= 30) {
        console.log('the best');
    } else {
        console.log('something went wrong');
    }
    
};
// detectPersonalLevel();
const showMyDataBase = (hidden) => {
 if (!hidden) {
    console.log(personalMovieDB);
 }
};
showMyDataBase(personalMovieDB.privat);

const writeYourGenres = () => {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`your favorite genre is numbered ${i}` );
        personalMovieDB.genres.push(genre);
    }
};
writeYourGenres();
