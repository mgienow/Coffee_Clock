const date = new Date();
const hourNow = date.getHours();
const minutesNow = date.getMinutes()

const java = document.getElementById('java')

let msg = `It's Coffee O'Clock!`
java.textContent = msg;

let minutes = balancedMinutes(minutesNow)
function balancedMinutes(i) {
  if(i<10) {i='0'+i}
  return i;
}

const clock = document.getElementById('clock')
clock.textContent = `${hourNow}:${minutes}`

function sendSalutations() {
  let coffeeBreak
  if (hourNow>16){
    coffeeBreak = `Good evening!<br>
                    Like some decaf?`
  } else if (hourNow>11){
  coffeeBreak = `Good afternoon.<br>
                How about an energizing<br>
                espresso?`
  }else if (hourNow>5){
    coffeeBreak = `Good morning!<br>
                    Ahhh, nothing like that first cup...`
  } else {
    coffeeBreak = `How do you take YOURS?`
  }
  const salutations = document.getElementById('salutations')
  salutations.innerHTML = coffeeBreak
}
sendSalutations();
