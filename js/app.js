'use strict';
var tries = 0;
var yourName = prompt('Selam! How\'re you today? What\'s your name?');


step1();
step2();
step3();
step4();
step5();
step6();
step7();


function step1(){
  var myFirstName = prompt('Is my nick name is Roma?').toLowerCase();
  console.log(myFirstName);
  if(myFirstName === 'yes' || myFirstName === 'YES' || myFirstName === 'y') {
    alert('That\'s correct');
    tries++;
    console.log(tries);
  } else {
    alert('Wrong! it is Roma.');
  }
}

function step2(){
  var myFavoriteColor = prompt('Do you think i like to travel?').toLowerCase();
  console.log(myFavoriteColor);
  if(myFavoriteColor === 'yes' || myFavoriteColor === 'YES' || myFavoriteColor=== 'y') {
    alert('Yes! that is right!');
    tries++;
    console.log(tries);
  } else {
    alert('Sorry, I love traveling!');
  }
}

function step3(){
  var myFavoriteAnimal = prompt('Do you think my favorite animal is Dog?').toLowerCase();
  console.log(myFavoriteAnimal);
  if(myFavoriteAnimal === 'yes' || myFavoriteAnimal === 'YES' || myFavoriteAnimal === 'y') {
    alert('Yes! that\'s right, I love dog and I have one! ');
    tries++;
    console.log(tries);
  } else {
    alert('Nope! You should know this.');
  }
}

function step4(){
  var myFavoriteMovie = prompt('Do you think i like to ride a roller coaster?').toLowerCase();
  console.log(myFavoriteMovie);
  if(myFavoriteMovie === 'no' || myFavoriteMovie === 'n') {
    alert('That\'s right, I don\'t like it');
    tries++;
    console.log(tries);
  } else {
    alert('Wrong!');
  }
}

function step5(){
  var myFavoriteSubject = prompt('Do you think I like to play soccer?').toLowerCase();
  console.log(myFavoriteSubject);
  if(myFavoriteSubject === 'yes' || myFavoriteSubject === 'YES' || myFavoriteSubject === 'y') {
    alert('That\'s right, I love playing soccer, but it has been long time since I played.');
    tries++;
    console.log(tries);
  } else {
    alert('Nope! I hope you know now.');
  }
}


function step6(){
  for ( var i = 0; i < 4; i++){
    var howManyMovies= prompt('Can you guess how many movies i have watched this year?');
    /*if # of tries are < 4 and if they didn't pick the right answer
    and if they got the right answer alert "you got it" you got the right answer
    break */
    if (howManyMovies === '5'){
      alert('You got it right!');
      break;
    }
    else if (howManyMovies < 5){
      alert('That\'s too low!');
    } else if (howManyMovies > 5){
      alert('That\'s too high!');
    }
  }
}



function step7(){
  var typeOfCar = ['honda' , 'toyota' , 'tesla', 'ford', 'bmw', 'jaguar'];
  console.log('typeOfCar: ' + typeOfCar);
  var myCar = prompt('What kind of car do i like?').toLowerCase();
  console.log('myCar: '+ myCar);
  var attempt = 1;

  loop2:
  while (attempt < 6) {
    for (var i = 0; i < typeOfCar.length; i++){
      if(myCar === typeOfCar[i]){
        alert('That\'s correct');
        tries++;
        break loop2;
      }
    }
    myCar = prompt('Try again');
    attempt++;
  }

  var allCars = '';
  for (var carIndex=0; carIndex < typeOfCar.length; carIndex++){
    allCars = allCars + typeOfCar[carIndex] + ' ';
  }
  alert('My favorite cars are: ' + allCars);

}

if (tries === 6){
  alert(yourName + ' WOW! You\'re very smart');
  tries++;
  console.log(tries);
} else {
  alert(yourName + ' you got ' + tries + ' out of 6 correct.');
}
