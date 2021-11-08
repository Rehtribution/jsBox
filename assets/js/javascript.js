const box = document.getElementById('box');
let outInterval = null;

document.getElementById("growBtn").addEventListener("click", function() {
  let height = box.offsetHeight + 50;
  let width = box.offsetWidth + 50;
  
  box.style.height = height + 'px';
  box.style.width = width + 'px';
});

document.getElementById("shrinkBtn").addEventListener("click", function() {
  let height = box.offsetHeight - 50;
  let width = box.offsetWidth - 50;
  
  box.style.height = height + 'px';
  box.style.width = width + 'px';
});

document.getElementById("blueBtn").addEventListener("click", function() {
  box.style.backgroundColor = 'blue';
});

document.getElementById("fadeBtn").addEventListener("click", function() {
  fadeOut(box, 2000);
});

document.getElementById("resetBtn").addEventListener("click", function() {
  // Reset 'Grow'
  box.style.height = '150px';
  box.style.width = '150px';
  
  // Reset 'Blue'
  box.style.backgroundColor = 'orange';
  
  // Reset 'Fade'
  clearInterval(outInterval);
  box.style.opacity = 1;
});

function fadeOut(elem, speed) {
  if (!elem.style.opacity) {
    elem.style.opacity = 1;
  } // end if

  outInterval = setInterval(function() {
    elem.style.opacity -= 0.02;
    if (elem.style.opacity <= 0) {
      clearInterval(outInterval);
    } // end if
  }, speed / 50);
};