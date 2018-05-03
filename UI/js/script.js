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

const hamburger = document.getElementsByClassName('hamburger');

const details = document.getElementsByClassName('details');

const adminCards = document.querySelectorAll('.card.admin');

const drawer = document.getElementById('drawer');

// to manually open drawer to add menu
const addMenu = document.getElementById('add-menu');

const updateMenu = document.getElementById('update');

const deleteMenu = document.getElementById('delete');

// child components steal click on card - evt.target cannot be relied on
for (let card of adminCards) {
  card.addEventListener('click', editCard)
}

// deal with null cases
if (updateMenu) {
  updateMenu.addEventListener('click', reload);
}

if (deleteMenu) {
  deleteMenu.addEventListener('click', reload);
}

if (addMenu) {
  addMenu.addEventListener('click', openDrawer);
}

function editCard(evt) {
  const pickedCard = evt.target.closest('.card.admin');
  pickedCard.classList.add('card-active');
  // loop through cards and deactivate any activated
  for (let card of adminCards) {
    const otherCard = card.closest('.card.admin');
    if (otherCard !== pickedCard && otherCard.classList.contains('card-active')) {
      otherCard.classList.remove('card-active');
    }
  }
  openDrawer(pickedCard);
}

function openDrawer(card) {
  if (!drawer.style.height) {
    drawer.classList.add('open-drawer');
  }

  // focus form
  let form = document.forms['menuform'];
  form.elements[0].focus();

}

function reload() {
  // force reload from server
  window.location.reload(true);
}

// hamburger for slidemenu
for (let ham of hamburger) {
  ham.addEventListener('click', toggleSlideMenu);
}

function toggleSlideMenu() {
  const sideMenu = document.getElementById('side-menu');

  const dimmer = document.querySelector("[data-dimmer]");
  // if not yet set by js, or set
  if (!sideMenu.style.left || sideMenu.style.left == '-300px') {
    sideMenu.style.left = '0px';
    // dim body and remove scroll
    dimmer.style.visibility = 'visible';
    document.body.classList.add('nav-dimmer-open');
    return;
  }
  sideMenu.style.left = '-300px';
  dimmer.style.visibility = 'hidden';
  document.body.classList.remove('nav-dimmer-open');

}

for (let detail of details) {
  let card = detail.parentNode;

  let expand = detail.parentNode.querySelector('.expand');

  let action = card.querySelector('.action');

  let closeCard = detail.querySelector('.close-card');

  expand.addEventListener('click', toggleDetail(expand, detail, card, action));

  closeCard.addEventListener('click', toggleDetail(expand, detail, card, action));
}

function toggleDetail(expand, detail, card, action) {
  return function(evt) {
    if (evt.target == expand)
    {
      card.style.overflow = 'hidden';
      detail.style.display = 'block';
      action.style.display = 'block';
      action.style.transitionDelay = '0.3s';
      detail.style.opacity = 1;

      action.style.opacity = 1;
      setTimeout(function() {

        detail.style.transform = 'translateY(-100%)';


        action.style.transform = 'translateY(-100%)';
      });
      return;
    }



    detail.style.opacity = 0;
    detail.style.transform = 'translateY(100%)';

    action.style.transitionDelay = 'unset';

    action.style.transform = 'translateY(100%)';

    action.style.opacity = 0;

    setTimeout(function() {
      detail.style.display = 'none';
      card.style.overflow = 'visible';
      action.style.display = 'none';

    }, 500);

  }
}


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

// for (let i of order) {
//   i.addEventListener('click', function() {
//     this.parentNode.parentNode.parentNode.querySelector(' .js-orders').textContent++;
//   })
// }


for (let button of btn) {
  button.addEventListener('click', showModal);
}
if (close) {
  close.addEventListener('click', closeModal);
}

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
