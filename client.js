const today = new Date();
const hourNow = today.getHours();

const java = document.getElementById("java");

// Create a variable called msg to hold a new message
let msg = `It's Coffee O'Clock`;

// Create a function to update the content of the element whose id attribute has a value of "message"
function updateMessage() {
  var el = document.getElementById('java');
  el.textContent = msg;
}

// Call the function
updateMessage();


function sendSalutations() {
  const salutations = document.getElementById("salutations");

let greeting;
if (hourNow > 18) {
  greeting = `Good Evening!
              How about some decaf?`;
} else if (hourNow > 12) {
  greeting = `Good afternoon!
              An energizing espresso?`;
} else if (hourNow > 0) {
  greeting = `Good Morning!
              Ahhh, that first cup...`;
} else {
  greeting = `Hello there!`;
}

 salutations.textContent = greeting;
}
sendSalutations();

function startTime() {
    // let h = today.getHours();
    let minutes = today.getMinutes();
    minutes = checkTime(minutes);

    document.getElementById('clock').innerHTML =
    `${hourNow}:${minutes}`;
    let t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = '0' + i};  // add zero in front of numbers < 10
    return i;
}
