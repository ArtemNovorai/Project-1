/*events onclick and move left pictures*/

document.getElementById("man")
car.onclick = function() {
  
  var start = Date.now();
  var timer = setInterval(function() {
  var timePassed = Date.now() - start;

    car.style.right = timePassed / 5 + 'px';
  
  if (timePassed > 8300) clearInterval(timer);

  }, 20);
}

/* changing the color of the words */

onload = function() {

  var colors = ['green', 'blue', 'red'];
  
Changehead(0, colors, colors.length);
};

function Changehead(i, m, l) {

  document.getElementById("text").style.color = m[i];
    
    i = i + 1 == l ? 0 : i + 1;
    
    setTimeout(function() {
    Changehead(i, m, l)
  
    }, 600);
};