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

var searchButton = document.getElementById('search');
searchButton.addEventListener('click', function(theEvent){
  var input = document.getElementById('input');
  var results = match(input.value, items);
  results.forEach(function(item){
    var rating = item.rating;
    var eachItem = document.createElement('p');
    eachItem.textContent = item.name+" Price: $"+item.price + " Rating: "+ item.rating;
    var resultDisplay = document.getElementById('results');
    resultDisplay.appendChild(eachItem);
  })
});
