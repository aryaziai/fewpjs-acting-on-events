let dodger = document.getElementById("dodger");


function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0 && left < 360) {
    dodger.style.left = `${left - 1}px`;
  }
}


function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0 && left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }