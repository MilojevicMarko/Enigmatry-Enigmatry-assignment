const dialog = document.getElementById("dialog");
const closeBtn = document.querySelector(".close");
const navContact = document.querySelector("nav ul li:nth-child(4) a");
const contactBt = document.querySelector('#contactLink');
const contactBtc = document.querySelector('#contact-us');


window.onload = function() {
  dialog.style.display = 'block';
}

navContact.onclick = function() {
  dialog.style.display = 'block';
}

closeBtn.onclick = function() {
  dialog.style.display = 'none';
}

contactBt.onClick = function() {
  dialog.style.display = 'block';
}

contactBtc.onClick = function() {
  dialog.style.display = 'block';
}


