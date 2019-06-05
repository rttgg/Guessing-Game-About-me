'use strict'

var myFirstName = prompt('what is my nick name, Roma or Rom?');
console.log(myFirstName.toLowerCase());
if(myFirstName === 'Rom' || myFirstName === 'ROM' || myFirstName === 'rom') {
    alert('that\'s correct');
} else {
   alert('nope my nick name is Rom');
}

var myFavoriteColor = prompt('what is my favorite color, gray or black?');
console.log(myFavoriteColor.toLowerCase());
if(myFavoriteColor.toLowerCase() === 'gray') {
     alert('yes! that is right, '+ myFavoriteColor + ' is my favorite color!')
} else { 
    alert('NOPE! i hope one day you will figure it out! ')
}

var myFavoriteAnimal = prompt('What is my favorite animal, dog or cat?');
console.log(myFavoriteAnimal.toLowerCase());
if(myFavoriteAnimal.toLowerCase() === 'dog') {
    alert('yes! that\'s right, i love '+ myFavoriteAnimal + ' ! ')
} else { 
    alert('NOPE! i hope one day you will figure it out! ')
}

var myFavoriteMovie = prompt('What is my favorite movie, Titanic or Lord of the ring?');
console.log(myFavoriteMovie.toLowerCase());
if(myFavoriteMovie.toLowerCase() === 'lord of the ring') {
   alert('that\'s right, i have watched '+ myFavoriteMovie + ' many times. ')
} else { 
    alert('Wrong! ' + myFavoriteMovie + ' is my second favorite.')
}

var myFavoriteSubject = prompt('What is my favorite subject, Math or Art?');
console.log(myFavoriteSubject.toLowerCase());
if(myFavoriteSubject.toLowerCase() === 'math') {
   alert('that\'s right, i love '+ myFavoriteSubject + ' but it has been long since i took it')
} else { 
   alert('Nope! but that is my second favorite! ')
}




