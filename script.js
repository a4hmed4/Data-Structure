// script.js

// Queue 

let queue = [];

let queueOperationBox = document.getElementById('queue-operation-box');

let queueList = document.getElementById('queue-list');

function addToQueue() {
  let inputElement = document.getElementById('queue-input');
  let positionElement = document.getElementById('position-input');
  let element = inputElement.value;
  let position = positionElement.value !== '' ? parseInt(positionElement.value) : undefined;

  if (element.trim() !== '') {
    if (position !== undefined && position >= 0 && position <= queue.length) {
      queue.splice(position, 0, element);
      updateQueue();
      updateOperationBox(queueOperationBox, `Enqueued at position ${position}: ${element}`);
    } else {
      queue.push(element);
      updateQueue();
      updateOperationBox(queueOperationBox, `Enqueued at the end: ${element}`);
    }
  }

  inputElement.value = '';
  positionElement.value = '';
}

function removeFromQueue() {

  if (queue.length > 0) {

    let removedElement = queue.shift();

    updateQueue();

    updateOperationBox(queueOperationBox, `Dequeued: ${removedElement}`);

  } else {

    updateOperationBox(queueOperationBox, 'Queue is empty.');

  }
}

function updateQueue() {

  queueList.innerHTML = '';

  let displayString = '';

  for (let element of queue) {

    displayString += `| ${element} | `;

  }

  queueList.innerText = displayString;
  queueLength.innerText = `Queue Length: ${queue.length}`;

}

let queueLength = document.getElementById('queue-length');


// Stack
let stack = [];
let stackOperationBox = document.getElementById('stack-operation-box');
let stackList = document.getElementById('stack-list');

function addToStack() {
  let inputElement = document.getElementById('stack-input');
  let positionElement = document.getElementById('position-input-s');
  let element = inputElement.value;
  let position = positionElement.value !== '' ? parseInt(positionElement.value) : undefined;


  if (element.trim() !== '') {
    if (position !== undefined && position >= 0 && position <= stack.length) {
      stack.splice(position, 0, element);
      updateStack();
      updateOperationBox(stackOperationBox, `Pushed at position: ${position}: ${element}`);
    } else {
      stack.push(element);
      updateStack();
      updateOperationBox(stackOperationBox, `Pushed: ${element}`);
    }

    inputElement.value = '';
    positionElement.value = '';
  }
}

function removeFromStack() {
  if (stack.length > 0) {
    let removedElement = stack.pop();
    updateStack();
    updateOperationBox(stackOperationBox, `Popped: ${removedElement}`);
  } else {
    updateOperationBox(stackOperationBox, 'Stack is empty.');
  }
}

function updateStack() {

  stackList.innerHTML = '';

  for(let i = stack.length - 1; i >= 0; i--) {

    let element = stack[i];

    let listItem = document.createElement('div');
    
    listItem.textContent = `| ${element} |`;
    
    stackList.appendChild(listItem);

  }

  stackLength.innerText = `Stack Length: ${stack.length}`;

}
let stackLength = document.getElementById('stack-length');

  
 

// Linked List
let linkedList = [];
let linkedListOperationBox = document.getElementById('linked-list-operation-box');
let linkedListItems = document.getElementById('linked-list-items');

function addToLinkedList() {
  let inputElement = document.getElementById('linked-list-input');
  let positionElement = document.getElementById('position-input-l');
  let element = inputElement.value;
  let position = positionElement.value !== '' ? parseInt(positionElement.value) : undefined;

  if (element.trim() !== '') {
    if (position !== undefined && position >= 0 && position <= linkedList.length) {
      linkedList.splice(position, 0, element);
      updateLinkedList();
      updateOperationBox(linkedListOperationBox, `Appended at position ${position}: ${element}`);
    } else {
    linkedList.push(element);
    updateLinkedList();
    updateOperationBox(linkedListOperationBox, `Appended: ${element}`);
    }
  }

  inputElement.value = '';
  positionElement.value = '';
}

function removeFromLinkedList() {
  if (linkedList.length > 0) {
    let removedElement = linkedList.pop();
    updateLinkedList();
    updateOperationBox(linkedListOperationBox, `Removed: ${removedElement}`);
  } else {
    updateOperationBox(linkedListOperationBox, 'Linked List is empty.');
  }
}

let linkedListLength = document.getElementById('linked-list-length');
function updateLinkedList() {
  linkedListItems.innerHTML = '';
  let displayString3 = '';
  for (let element of linkedList) {
    displayString3 += `| ${element} | `;
  }
  linkedListItems.innerText = displayString3;
  linkedListLength.innerText = `Linked List Length: ${linkedList.length}`;

}

function updateOperationBox(operationBox, message) {
  operationBox.textContent = message;
}



/*--------------------------*/


(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate  glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  


  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()

/*===================================*/
AOS.init({
  duration: 1200,
})
