'use strict'

var myFirstName = prompt('Is my nick name is Roma?').toLowerCase();
console.log(myFirstName);
if(myFirstName === 'yes' || myFirstName === 'YES' || myFirstName === 'y') {
    alert('that\'s correct');
} else {
   alert('WRONG! it is Roma.');
}

var myFavoriteColor = prompt('Is my favorite color is gray?').toLowerCase();
console.log(myFavoriteColor);
if(myFavoriteColor === 'yes' || myFavoriteColor === 'YES' || myFavoriteColor=== 'y') {
     alert('yes! that is right!')
} else { 
    alert('Sorry, it is!')
}

var myFavoriteAnimal = prompt('Do you think my favorite animal is Dog?').toLowerCase();
console.log(myFavoriteAnimal);
if(myFavoriteAnimal === 'yes' || myFavoriteAnimal === 'YES' || myFavoriteAnimal === 'y') {
    alert('yes! that\'s right, i love dog and i have one! ')
} else { 
    alert('NOPE! you should know this.')
}

var myFavoriteMovie = prompt('Do you think i like to watch movies?').toLowerCase();
console.log(myFavoriteMovie);
if(myFavoriteMovie === 'yes' || myFavoriteMovie === 'YES' || myFavoriteMovie === 'y') {
   alert('that\'s right, one of my favorite movie is Lord of the ring.')
} else { 
    alert('Wrong! It is my favorite.')
}

var myFavoriteSubject = prompt('Do you think i like Math\'s?').toLowerCase();
console.log(myFavoriteSubject);
if(myFavoriteSubject === 'yes' || myFavoriteSubject === 'YES' || myFavoriteSubject === 'y') {
   alert('that\'s right, i like Math\'s but it has been long time since i took it.')
} else { 
   alert('Nope! I hope you know now.')
}




