var items = [
  {id: 1, name: 'Samsung Television', price: 499.99, brand: 'Samsung', rating: 4},
  {id: 2, name: 'Apple iPhone 6s', price: 399.99, brand: 'Apple', rating: 4.5},
  {id: 3, name: 'Vizio Laptop', price: 199.99, brand: 'Vizio', rating: 3},
  {id: 4, name: 'Apple MacBook Pro', price: 1299.99, brand: 'Apple', rating: 4.5},
  {id: 5, name: 'Harry Potter: Chamber of Secrets', price: 12.99, author: 'J.K. Rowling', rating: 5},
  {id: 6, name: 'How to Win Friends & Influence People', price: 8.99, author: 'Dale Carnegie', rating: 5},
  {id: 7, name: 'A Universe From Nothing', price: 11.99, author: 'Lawrence M Krauss', rating: 3.5},
  {id: 8, name: 'The Big Picture', price: 9.99, author: 'Sean Carroll', rating: 4},
  {id: 9, name: 'Interstellar', price: 12.99, rating: 2.5},
  {id: 10, name: 'Deadpool', price: 11.99, rating: 4},
  {id: 11, name: 'Star Wars: The Force Awakens', price: 13.99, rating: 5},
  {id: 12, name: 'Ex Machina', price: 12.99, rating: 3.5},
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

  var container = document.createElement('div');
  container.setAttribute('class', 'col-xs-3 panel panel-default');

  var item = document.createElement('div');
  item.setAttribute('class', 'panel-body');
  item.setAttribute('align', 'center');

  var name = document.createElement('h4');
  name.setAttribute('name', data.name);
  name.textContent = data.name;

  var price = document.createElement('h4');
  price.setAttribute('price', data.price);
  price.textContent = "$"+data.price;

  var rating = document.createElement('h4');
  rating.setAttribute('rating', data.rating);
  rating.textContent = "Rating: "+data.rating;

  var addToCart = document.createElement('button');
  addToCart.setAttribute('id',data.id);
  addToCart.textContent = "Add to Cart";

  container.appendChild(item);
  item.appendChild(name);
  item.appendChild(price);
  item.appendChild(rating);
  item.appendChild(addToCart);
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
  var title = document.getElementById('suggestionBox');
  title.style.opacity = 1;
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
});

var cart = {
  items: []
}

var results = document.getElementById('results');
results.addEventListener('click', function(theEvent){
  theId = theEvent.target.getAttribute('id');
  console.log(theId);
  var counter = document.getElementById('itemCounter');
  var count = parseInt(counter.textContent);
  if(theId !== null && theId !== 'results'){
    count++;
  }
  counter.textContent = count;

  items.forEach(function(item){
    if (item.id == theId) {
      cart.items.push(item);
      console.log(cart);
    }
  })
});
