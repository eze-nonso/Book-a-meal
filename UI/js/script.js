// Modal
const modal = document.getElementById('modal');

const btn = document.getElementsByClassName('js-modal-btn');

const close = document.getElementsByClassName('close')[0];

// Table rows
const trows = document.querySelectorAll('.table tbody tr');

const cards = document.getElementsByClassName('js-card--baseline');

const order = document.getElementsByClassName('js-add-order');

const removeOrder = document.getElementsByClassName('js-remove-order');

const orders = document.getElementsByClassName('js-orders');

for (let card of cards) {
  card.addEventListener('mouseover', function(evt) {
    let actionBar = this.querySelector(' .card__body__detail__action');

    actionBar.style.transition = 'height 0.3s ease-in-out';

    actionBar.style.height = '30px';

    let elements = actionBar.querySelectorAll('[aria-hidden]');

    actionBar.querySelector(' div').style.opacity = 1;

    Array.prototype.forEach.call(elements, element => {
      element.attributes['aria-hidden'] = false;
    });
  });

  card.addEventListener('mouseout', function(evt) {
    let actionBar = this.querySelector(' .card__body__detail__action');

    actionBar.style.transition = 'height 0.1s linear';
    actionBar.style.height = '4px';

    actionBar.querySelector(' div').style.opacity = 0;

    let elements = actionBar.querySelectorAll('[aria-hidden]');

    actionBar.querySelector(' div').style.opacity = 0;


    Array.prototype.forEach.call(elements, element => {
      element.attributes['aria-hidden'] = true;
    });
  });
}

for (let i of order) {
  i.addEventListener('click', function() {
    this.parentNode.parentNode.parentNode.querySelector(' .js-orders').textContent++;
  })
}


for (let button of btn) {
  button.addEventListener('click', showModal);
}

close.addEventListener('click', closeModal);

function showModal (evt) {
  modal.style.display = 'block';

  // hide body scrollbar
  document.body.style.overflow = 'hidden';

  window.addEventListener('click', closeModal);
}

function closeModal(evt) {

  if (evt.target == close || evt.target == modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';

    if (evt.target == modal) {
      window.removeEventListener('click', closeModal);
    }
  }

}


// activate first tr element
// const first = document.querySelector('.table tbody tr:first-child');
//
// first.classList.add('active');

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
