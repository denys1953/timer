var inp = document.getElementById('result');
var par = document.getElementById('p');

inp.addEventListener('blur', func);
document.onclick = function() {
   navigator.vibrate(200);
}
function func() {
   let time = inp.value;
	let timer = setInterval(function() {
      if(time <= 0) {
         time = 0 + 1;
         clearInterval(timer);
         navigator.vibrate(200);
      }
      inp.onclick = function() {
         clearInterval(timer);
      }
      time--;
      par.innerHTML = time;
   }, 1000);
} 