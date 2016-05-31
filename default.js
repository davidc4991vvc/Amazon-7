var items = [
  {name: 'Samsung Flatscreen Television', price: 499.99, brand: 'Samsung', rating: 4},
  {name: 'Apple iPhone 6s', price: 399.99, brand: 'Apple', rating: 4.5},
  {name: 'Vizio Laptop', price: 199.99, brand: 'Vizio', rating: 3},
  {name: 'Apple MacBook Pro', price: 1299.99, brand: 'Apple', rating: 4.5},
  {name: 'Harry Potter: Chamber of Secrets', price: 12.99, author: 'J.K. Rowling', rating: 5},
  {name: 'How to Win Friends & Influence People', price: 8.99, author: 'Dale Carnegie', rating: 5},
  {name: 'A Universe From Nothing', price: 11.99, author: 'Lawrence M Krauss', rating: 3.5},
  {name: 'The Big Picture', price: 9.99, author: 'Sean Carroll', rating: 4},
  {name: 'Interstellar', price: 12.99, rating: 2.5},
  {name: 'Deadpool', price: 11.99, rating: 4},
  {name: 'Star Wars: The Force Awakens', price: 13.99, rating: 5},
  {name: 'Ex Machina', price: 12.99, rating: 3.5},
]
function match(input, list){
  var theItems = [];
  list.forEach(function(item){
    if (item.name.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
      theItems.push(item);
    }
  });
  return theItems;
}

function show(items){
  var results = document.getElementById('results');
  for (var i = 0; i < items.length; i++) {
    var eachItem = document.createElement('p');
    results.appendChild(item(items[i]));
  }
}

function item(data){
  var suggestions = document.createElement('h1');
  suggestions.textContent = 'Suggestions for your search: ';
  var container = document.createElement('div');
  container.setAttribute('class', 'col-xs-3 panel panel-default');

  var item = document.createElement('div');
  item.setAttribute('class', 'panel-body');

  var name = document.createElement('h4');
  name.textContent = data.name;

  container.appendChild(item);
  item.appendChild(name);
  return container;
}

function clear(element){
  while(element.firstChild){
    element.removeChild(element.firstChild)
  }
}

var searchButton = document.getElementById('search');
searchButton.addEventListener('click', function(theEvent){
  var results = document.getElementById('results');
  clear(results);
  var input = document.getElementById('input');
  show(match(input.value, items));
});

var vizioButton = document.getElementById('vizio');
vizioButton.addEventListener('click', function(theEvent){
  var pageOne = document.getElementById('firstPage');
  var pageTwo = document.getElementById('secondPage');
  pageOne.style.zIndex = '0';
  pageOne.style.opacity = '0';
  pageTwo.style.zIndex = '1';
  pageTwo.style.opacity = '1';
});

var returnHomeButton = document.getElementById('returnHome');
returnHomeButton.addEventListener('click', function(theEvent){
  var pageOne = document.getElementById('firstPage');
  var pageTwo = document.getElementById('secondPage');
  pageOne.style.zIndex = '1';
  pageOne.style.opacity = '1';
  pageTwo.style.zIndex = '0';
  pageTwo.style.opacity = '0';
})
