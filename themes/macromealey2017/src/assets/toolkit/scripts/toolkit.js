/**
* Toolkit JavaScript
*/

function buildURL() {
  console.log(window.location.origin);
  // if (window.location.origin === '')
}

document.addEventListener("DOMContentLoaded", function(event) {
  progressLoader().then(function (progressFile) {
    let progressJSON = JSON.parse(progressFile);
    let objectiveContainers = document.querySelectorAll('#objectives');
    Object.keys(progressJSON.objectives).map(function(key) {
      let percent = Math.floor((progressJSON.objectives[key].completed / progressJSON.objectives[key].total) * 100);
      let objective = document.createElement('div');
      let label = document.createElement('label');
      let progress = document.createElement('progress');
      objective.className = 'objective site-footer__tertiary';
      label.innerHTML = key.replace(/_/g, ' ');
      progress.innerHTML = `${percent}%`;
      progress.setAttribute('value', progressJSON.objectives[key].completed);
      progress.setAttribute('max', progressJSON.objectives[key].total);
      objective.appendChild(label);
      objective.appendChild(progress);
      let content = [];
      Object.keys(objectiveContainers).map(function(objectiveContainer, index) {
        let content = this;
        content[objectiveContainer] = objective.cloneNode(true);
        objectiveContainers[objectiveContainer].appendChild(content[objectiveContainer]);
      }, content);
    });



  })
 var checkboxes = document.querySelectorAll('input[type="checkbox"]:not(.ms-nav__toggle)');
 var radios = document.querySelectorAll('input[type="radio"]');
 var textareas = document.querySelectorAll('textarea');
 var textfields = document.querySelectorAll('input[type="text"], input[type="date"], input[type="email"], input[type="file"], input[type="number"], input[type="month"], input[type="password"], input[type="search"], input[type="tel"], input[type="time"], input[type="url"], input[type="week"]');

 addInputEventListener(textfields, 'textfield');
 addInputEventListener(textareas, 'textarea');
 modifyToggle(checkboxes, 'checkbox');
 modifyToggle(radios, 'radio');
 addIcons();
});


function addInputEventListener (matches, type) {
 Object.keys(matches).map(function (match) {
   if(typeof matches[match] === 'object') {
     matches[match].classList.add(type);
     matches[match].addEventListener('change', function (event) {
       if (event.target.value !== "") {
         event.target.classList.add(`${type}--filled`);
       } else {
         event.target.classList.remove(`${type}--filled`);
       }
     });
   }
 });
}

function modifyToggle(elements, type) {
  Object.keys(elements).map(function (element) {
   if(elements[element].id !== 'site-nav-toggle') {
     var currentElement = elements[element];
     loadSVG(`${window.location.origin}styleguide/assets/toolkit/images/${type}.svg`).then(function (svg) {
       var parser = new DOMParser();
       var doc = parser.parseFromString(svg, 'image/svg+xml');
       doc.documentElement.addEventListener('click', function () {
         currentElement.click();
       })
       var wrapper = document.createElement('div');
       wrapper.classList.add(type);
       document.getElementsByTagName('body')[0].appendChild(wrapper);
       currentElement.parentNode.insertBefore(wrapper, currentElement.nextSibling);
       wrapper.appendChild(currentElement);
       wrapper.appendChild(doc.documentElement);
     })
   }
  });
}

function addIcons() {
   loadSVG(`${window.location.origin}/macromealey/styleguide/assets/toolkit/images/spritesheet.svg`).then(function (svg) {
     var parser = new DOMParser();
     var doc = parser.parseFromString(svg, 'image/svg+xml');
     document.body.appendChild(doc.documentElement);
   })
 }

function loadSVG(filename) {
 return new Promise(function (resolve, reject) {
   var client = new XMLHttpRequest();
   client.open('GET', filename);
   client.onload = function () {
     if(client.status >= 200 && client.status < 300) {
       resolve(client.responseText);
     } else {
       reject({status: client.status, statusText: client.statusText});
     }
   }
   client.onerror = function () {
     reject({status: client.status, statusText: client.statusText})
   }
   client.send();
 });
}

function progressLoader() {
  return new Promise(function (resolve, reject) {
    var client = new XMLHttpRequest();
    client.open('GET', `${window.location.origin}/macromealey/progress.json`);
    client.onload = function () {
      if(client.status >= 200 && client.status < 300) {
        resolve(client.responseText);
      } else {
        reject({status: client.status, statusText: client.statusText});
      }
    }
    client.onerror = function () {
      reject({status: client.status, statusText: client.statusText})
    }
    client.send();
  });
}
