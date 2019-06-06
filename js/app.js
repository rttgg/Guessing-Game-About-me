'use strict'

// var myFirstName = prompt('Is my nick name is Roma?').toLowerCase();
// console.log(myFirstName);
// if(myFirstName === 'yes' || myFirstName === 'YES' || myFirstName === 'y') {
//     alert('that\'s correct');
// } else {
//    alert('WRONG! it is Roma.');
// }

// var myFavoriteColor = prompt('Is my favorite color is gray?').toLowerCase();
// console.log(myFavoriteColor);
// if(myFavoriteColor === 'yes' || myFavoriteColor === 'YES' || myFavoriteColor=== 'y') {
//      alert('yes! that is right!')
// } else { 
//     alert('Sorry, it is!')
// }

// var myFavoriteAnimal = prompt('Do you think my favorite animal is Dog?').toLowerCase();
// console.log(myFavoriteAnimal);
// if(myFavoriteAnimal === 'yes' || myFavoriteAnimal === 'YES' || myFavoriteAnimal === 'y') {
//     alert('yes! that\'s right, i love dog and i have one! ')
// } else { 
//     alert('NOPE! you should know this.')
// }

// var myFavoriteMovie = prompt('Do you think i like to watch movies?').toLowerCase();
// console.log(myFavoriteMovie);
// if(myFavoriteMovie === 'yes' || myFavoriteMovie === 'YES' || myFavoriteMovie === 'y') {
//    alert('that\'s right, one of my favorite movie is Lord of the ring.')
// } else { 
//     alert('Wrong! It is my favorite.')
// }

// var myFavoriteSubject = prompt('Do you think i like Math\'s?').toLowerCase();
// console.log(myFavoriteSubject);
// if(myFavoriteSubject === 'yes' || myFavoriteSubject === 'YES' || myFavoriteSubject === 'y') {
//    alert('that\'s right, i like Math\'s but it has been long time since i took it.')
// } else { 
//    alert('Nope! I hope you know now.')
// }

// var howManyMovies= prompt('Can you guess how many movies i have watched this year?')
// console.log(howManyMovies);
// if(howManyMovies === '5' ) {
//     alert('that\'s right, i have watched ' + howManyMovies + ' movies!')
// } else if (howManyMovies > 5 ) {
//     alert('that\'s too high!')
// } else if (howManyMovies < 5 ) {
//     alert('that\'s too low')
// }


var myCar = prompt('what kind of car i drive?').toUpperCase();
console.log(myCar);
var count = 6; 
var typeOfCar = ['Honda' , 'Toyota' , 'Tesla', 'Ford', 'BMW', 'Jaguar','Chrysler'];
for (var i = 0; i < count; i++){
   count--;
 if(myCar === typeOfCar[i]) {
alert('that\'s correct')
        } else if ( myCar !== typeOfCar[i]) {
            alert('try again')
            var tries = prompt('you have ' + count + ' tries left')
        } 
    }



