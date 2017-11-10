//initialize a new Date object
const today = new Date();

//then, use that to get the time:
const hourNow = today.getHours();
const minNow = today.getMinutes();

//unfortunately, minNow needs a little work. If the time now is 3:10, getMinutes()
//returns '10'; if it is currently 3:01, however, getMinutes() returns '1'
//SO we need to add a zero in front of single minute values:

//We construct a function that takes in a number and adds a zdro to the front of it --
//as a string -- if that number is less than 10
//THen we create a new variable, minutes, to hold the return value of the function width
//minNow passed in as the arg.
let minutes = minsAddZero(minNow);
function minsAddZero(i){
  if(i<10){i='0' + i};
  return i;
}
//reach into the HTML and get the div where we will be printing out the values from our JS, and assign it
//to a variable established to refer to this location:
const clock = document.getElementById('clock');
//then tell it we want the innerHTML there to be the value of hourNow and minutes, with a : in between
clock.innerHTML = `${hourNow}:${minutes}`;

//How about a snazzy title?  We could just put it in the markup as an <h1> but where is the JS fun in that?
//so, like our clock div, we are reaching into the HTML to get the relevant id, and then passing in our desired content
const java = document.getElementById('java');
let msg= `It's Coffee O'Clock!`

//then, assign the textContent of 'java' to hold the value of 'msg'
//Note: this time we use textContent, which is pretty much the same as innerHTML. It's faster to load, so use it when
//you con't need to pass any HTML instructiopns to the document
java.textContent = msg;


//FInally, the fanciest part. We write a function that evaluates the current hour and passes in an appropriate
//coffee-themed greeting:

function sendSalutations(){
  //establish a variable to hold our greeting. THen, if/else statements to check what the current time
  //is and return the appropriate coffee=themed greeting:
let greeting;
if(hourNow>16){
  greeting = `Good evening!<br>Care for some decaf?`
}else if(hourNow>11){
  greeting = `Good afternoon!<br>How about an<br>energizing<br>espresso?!`
}else if(hourNow>5){
  greeting = 'Good morning!<br>Ahhh,<br>nothing like that first cup...'
}else {
  greeting = `How do you take YOURS?`
}
//establish a variable that holds the location in our HTML: the div with id salutations
const salutations = document.getElementById('salutations')
//then, like the clock div above, assign the outcome of the hour evaluation to the innerHTML for
//our salutations location:
salutations.innerHTML = greeting
}
sendSalutations();
