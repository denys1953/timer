var inp = document.getElementById('result');
var par = document.getElementById('p');

inp.addEventListener('blur', func);
function func() {
   let time = inp.value;
	let timer = setInterval(function() {
      if(time <= 0) {
         time = 0 + 1;
         clearInterval(timer);
         navigator.vibrate(2000);
      }
      inp.onclick = function() {
         clearInterval(timer);
      }
      time--;
      par.innerHTML = time;
   }, 1000);
} 