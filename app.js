const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minutEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

let newYearTime = new Date("jan 1 , 2025 , 00:00:00").getTime();


updateDate();
function updateDate() {
    
  let now = new Date().getTime();
  let gap = newYearTime - now;
  let elementDate = new Date();
  let yearForward = elementDate.getFullYear() +1


  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  dayEl.innerHTML = d;
  hourEl.innerHTML = h
  minutEl.innerHTML = m;
  secondEl.innerHTML = s;
  const year = document.querySelector(".year").innerHTML = yearForward ;
  setTimeout(updateDate ,1000 )
}
