document.addEventListener("DOMContentLoaded", function(event) {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var radios = document.querySelectorAll('input[type="radio"]');
  var textareas = document.querySelectorAll('textarea');
  var textfields = document.querySelectorAll('input[type="text"], input[type="date"], input[type="email"], input[type="file"], input[type="number"], input[type="month"], input[type="password"], input[type="search"], input[type="tel"], input[type="time"], input[type="url"], input[type="week"]');

  addInputEventListener(textfields, 'textfield');
  addInputEventListener(textareas, 'textarea');
  modifyToggle(checkboxes, 'checkbox');
  modifyToggle(radios, 'radio');

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
      loadSVG(`${window.location.origin}/images/${type}.svg`).then(function (svg) {
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
