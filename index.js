const personalMovieDB = {
    count: 0,
    movies: {

    },
    actors: {},
    genres: [],
    privat: false,
    start:() => {
        personalMovieDB.count = +prompt('How many movies did you see?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies did you see?', '');
        }
    },
    rememberMyMovies: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('What did you watch the last movie?', '').trim();
            const b = prompt('How are you value one?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('lack movies');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('you are classical watcher');
        } else if (personalMovieDB.count >= 30) {
            console.log('the best');
        } else {
            console.log('something went wrong');
        }
        
    },
    showMyDataBase: (hidden) => {
        if (!hidden) {
           console.log(personalMovieDB);
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`your favorite genre is numbered ${i}` ).toLowerCase();
            if (genre === '' || genre === null) {
                console.log('You entered incorrect data');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Favorite genre ${index + 1}  - this is ${item}`);
        } );
    },
    toggleVisibleMyDb: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
};


