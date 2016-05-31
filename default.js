var items = [
  {name: 'Samsung Flatscreen Television', price: 499.99, brand: 'Samsung'},
  {name: 'Apple iPhone 6s', price: 399.99, brand: 'Apple'},
  {name: 'Vizio Laptop', price: 199.99, brand: 'Vizio'},
  {name: 'Apple MacBook Pro', price: 1299.99, brand: 'Apple'},
  {name: 'Harry Potter: Chamber of Secrets', price: 12.99, author: 'J.K. Rowling'},
  {name: 'How to Win Friends & Influence People', price: 8.99, author: 'Dale Carnegie'},
  {name: 'A Universe From Nothing', price: 11.99, author: 'Lawrence M Krauss'},
  {name: 'The Big Picture', price: 9.99, author: 'Sean Carroll'},
  {name: 'Interstellar', price: 12.99},
  {name: 'Deadpool', price: 11.99},
  {name: 'Star Wars: The Force Awakens', price: 13.99},
  {name: 'Ex Machina', price: 12.99},
]
function match(input, list){
  var theItems = [];
  list.forEach(function(item){
    if (item.name.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
      theItems.push(item);
      console.log(theItems);
    }
  });
  return theItems;
}

var searchButton = document.getElementById('search');
searchButton.addEventListener('click', function(theEvent){
  var input = document.getElementById('input');
  console.log(match(input.value, items));
});
