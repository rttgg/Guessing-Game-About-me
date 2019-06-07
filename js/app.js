'use strict';

step1();
step2();
step3();
step4();
step5();
step6();
step7();



var tries = 0;

function step1(){
  var myFirstName = prompt('Is my nick name is Roma?').toLowerCase();
  console.log(myFirstName);
  if(myFirstName === 'yes' || myFirstName === 'YES' || myFirstName === 'y') {
    alert('that\'s correct');
    tries++;
  } else {
    alert('WRONG! it is Roma.');
  }
}

function step2(){
  var myFavoriteColor = prompt('Is my favorite color is gray?').toLowerCase();
  console.log(myFavoriteColor);
  if(myFavoriteColor === 'yes' || myFavoriteColor === 'YES' || myFavoriteColor=== 'y') {
    alert('yes! that is right!');
    tries++;
  } else {
    alert('Sorry, it is!');
  }
}

function step3(){
  var myFavoriteAnimal = prompt('Do you think my favorite animal is Dog?').toLowerCase();
  console.log(myFavoriteAnimal);
  if(myFavoriteAnimal === 'yes' || myFavoriteAnimal === 'YES' || myFavoriteAnimal === 'y') {
    alert('yes! that\'s right, i love dog and i have one! ');
    tries++;
  } else {
    alert('NOPE! you should know this.');
  }
}

function step4(){
  var myFavoriteMovie = prompt('Do you think i like to watch movies?').toLowerCase();
  console.log(myFavoriteMovie);
  if(myFavoriteMovie === 'no' || myFavoriteMovie === 'n') {
    alert('that\'s right, one of my favorite movie is Lord of the ring.');
    tries++;
  } else {
    alert('Wrong! It is my favorite.');
  }
}

function step5(){
  var myFavoriteSubject = prompt('Do you think i like Math\'s?').toLowerCase();
  console.log(myFavoriteSubject);
  if(myFavoriteSubject === 'yes' || myFavoriteSubject === 'YES' || myFavoriteSubject === 'y') {
    alert('that\'s right, i like Math\'s but it has been long time since i took it.');
    tries++;
  } else {
    alert('Nope! I hope you know now.');
  }
}
// function step6(){

//   var numberOfTries = 0;
//   while(numberOfTries < 4){
//     var howManyMovies= prompt('Can you guess how many movies i have watched this year?');
//     console.log(howManyMovies);
//     if(howManyMovies === '5' ) {
//       alert('that\'s right, i have watched ' + howManyMovies + ' movies!');
//       break;
//       //tries++;
      
//     } else if (howManyMovies > 5 ) {
//       alert('that\'s too high!');
//     } else if (howManyMovies < 5 ) {
//       alert('that\'s too low');
//     }
//     //numberOfTries++;
//   }

function step6(){
  for ( var i = 0; i < 4; i++){
    var howManyMovies= prompt('Can you guess how many movies i have watched this year?');
    /*if # of tries are < 4 and if they didn't pick the right answer
    and if they got the right answer alert "you got it" you got the right answer 
    break */
    if (howManyMovies === '5'){
      alert('you got it right!');
      console.log('before break');
      break;
      
    }
    else if (howManyMovies < 5){
      alert('that\'s too low!');
    } else if (howManyMovies > 5){
      alert('that\'s too high!');
    }
  }
}



function step7(){
  var typeOfCar = ['honda' , 'toyota' , 'tesla', 'ford', 'bmw', 'jaguar'];
  console.log('typeOfCar: ' + typeOfCar);
  var myCar = prompt('what kind of car do i like?').toLowerCase();
  console.log('myCar: '+ myCar);
  var attempt = 1;

  loop2:
  while (attempt < 6) {
    for (var i = 0; i < typeOfCar.length; i++){
      if(myCar === typeOfCar[i]){
        alert('that\'s correct');
        tries++;
        break loop2;
      }
    }
    myCar = prompt('try again');
    attempt++;
  }

  var allCars = '';
  for (var carIndex=0; carIndex < typeOfCar.length; carIndex++){
    allCars = allCars + typeOfCar[carIndex] + ' ';
  }
  alert('my favorite cars are: ' + allCars);

}

console.log(tries);
if (tries < 6){
  alert(name + ' WOW! You\'re very smart');
  tries ++;
} else {
  alert(name + ' you got ' + tries + ' out of 6 correct.');
}
