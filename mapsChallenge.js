//Maps: Challenge

//Below is a list of Oscar-winning Best Pictures from the last several years.
// 2020 - "Parasite"
// 2019 - "Green Book"
// 2018 - "The Shape of Water"
// 2017 - "Moonlight"
// 2016 - "Spotlight"
// 2015 - "Birdman"
// 2014 - "12 Years a Slave"
// 2013 - "Argo"

//1. Create a new Map with the Best Pictures list from above.
//Make sure your keys are the year, BUT they can be any format.
const movies = new Map();
movies.set(2020, 'Parasite');
movies.set(2019, 'Green Book');
movies.set(2018, 'The Shape of Water');
movies.set(2017, 'Moonlight');
movies.set(2016, 'Spotlight');
movies.set(2015, 'Birdman');
movies.set(2014, '12 Years a Slave');
movies.set(2013, 'Argo');

//2. What film won best picture in 2015?
console.log('Best picture in 2015 is', movies.get(2015));

//3. Does this list contain Best Picture from 2010? 2018?
console.log('Does the last include 2010? ', movies.has(2010));
console.log('Does the last include 2018? ', movies.has(2018));

//4. How many films are included in this list?
console.log(`The list includes ${movies.size} films`)

//5. What is the second key in this movies Map?
const movieKeys = movies.keys();
movieKeys.next();
const secondKey = movieKeys.next().value;
console.log("The second key in the movies is: ", secondKey);

//6. What is the third value in this movies Map?
const movieValues = movies.values();
movieValues.next();
movieValues.next();
const thirdValue = movieValues.next().value;
console.log("The third value in the movies Map is: ", thirdValue);

//7. What is the first set of entries in this movies Map?
movies.entries.next();

//8. Loop over the map, and if the movie won Best Picture before 2017,
//log it in the console. Include the year and the movie.
movies.forEach((value, key) => {
    if (key < 2017) {
        console.log(`Best Picture winner in ${key}: ${value}`)
    }
});
//9. Delete the Best Picture from 2013 from your movies Map.
movies.delete(2013);

//10. Clear your movies Map.
movies.clear();
