// Modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Table rows
const trows = document.querySelectorAll('.table tbody tr');

// When the user clicks on the button, open the modal
if (btn) {
btn.onclick = function() {
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
if (span) {
span.onclick = function() {
    modal.style.display = "none";
}
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// activate first tr element
const first = document.querySelector('.table tbody tr:first-child');

first.classList.add('active');

// two ways of looping through a nodelist that work
Array.prototype.forEach.call(trows, tr => {
  tr.addEventListener('click', function(evt) {
    this.classList.add('active');

    for(let elem of trows) {
      if (elem != this && elem.classList) {
        elem.classList.remove('active');
      }
    }
  });
});
