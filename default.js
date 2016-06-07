var items = [
  {id: 21, name: 'Samsung Television', price: 499.99, brand: 'Samsung', rating: 4, image: 'Pictures/samsung.jpg', description: 'Enjoy Full HD viewing and enriched colors on this Samsung HDTV. Its Smart TV features let you stream videos and music, surf the Internet, download apps and more. Plus, watch your TV entertainment on your mobile device or vice versa.', reviews:[]},
  {id: 2, name: 'Apple iPhone 6s', price: 399.99, brand: 'Apple', rating: 4.5, image: 'Pictures/iphones.jpeg', description: 'The moment you use iPhone 6s, you know you’ve never felt anything like it. With a single press, 3D Touch lets you do more than ever before. Live Photos bring your memories to life in a powerfully vivid way. And that’s just the beginning. Take a deeper look at iPhone 6s, and you’ll find innovation on every level.', reviews:[]},
  {id: 3, name: 'Vizio Laptop', price: 199.99, brand: 'Vizio', rating: 3, image: 'Pictures/vizio.jpeg', description: 'The remarkably powerful and beautifully portable VIZIO Notebook PC is packed with premium entertainment features, from Full HD display and premium audio to enhanced graphics, to let you work all day and play all night.', reviews:[]},
  {id: 4, name: 'Apple MacBook Pro', price: 1299.99, brand: 'Apple', rating: 4.5, image: 'Pictures/macbook.jpeg', description: 'Apple - MacBook Pro with Retina display (Latest Model) - 13.3" Display - 8GB Memory - 512GB Flash Storage - Silver', reviews:[]},
  {id: 5, name: 'Harry Potter: Chamber of Secrets', price: 12.99, author: 'J.K. Rowling', rating: 5, image: 'Pictures/harry.jpg', description: 'Young wizard Harry Potter and his friends, Ron and Hermione, face new challenges during their second year at Hogwarts School of Witchcraft and Wizardry as they try to discover a dark force that is terrorizing the school.', reviews:[]},
  {id: 6, name: 'How to Win Friends & Influence People', price: 8.99, author: 'Dale Carnegie', rating: 5, image: 'Pictures/winFriends.jpg', description: 'Written by Dale Carnegie and first published in 1936, it has sold over 30 million copies world-wide, and went on to be named #19 on Time Magazine\'s list of 100 most influential books in 2011.', reviews:[]},
  {id: 7, name: 'A Universe From Nothing', price: 11.99, author: 'Lawrence M Krauss', rating: 3.5, image: 'Pictures/universe.jpeg', description: 'A Universe from Nothing: Why There Is Something Rather than Nothing is a book by physicist Lawrence M. Krauss, initially published on January 10, 2012 by Free Press.', reviews:[]},
  {id: 8, name: 'The Big Picture', price: 9.99, author: 'Sean Carroll', rating: 4, image: 'Pictures/bigPicture.jpeg', description: 'Already internationally acclaimed for his elegant, lucid writing on the most challenging notions in modern physics.', reviews:[]},
  {id: 9, name: 'Interstellar', price: 12.99, rating: 2.5, image: 'Pictures/interstellar.jpeg', description: 'In Earth\'s future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth\s population to a new home via a wormhole.', reviews:[]},
  {id: 10, name: 'Deadpool', price: 11.99, rating: 4, image: 'Pictures/deadpool.jpg', description: 'Wade Wilson (Ryan Reynolds) is a former Special Forces operative who now works as a mercenary. His world comes crashing down when evil scientist Ajax (Ed Skrein) tortures, disfigures and transforms him into Deadpool. The rogue experiment leaves Deadpool with accelerated healing powers and a twisted sense of humor.', reviews:[]},
  {id: 11, name: 'Star Wars: The Force Awakens', price: 13.99, rating: 5, image: 'Pictures/starWars.jpg', description: 'Thirty years after the defeat of the Galactic Empire, the galaxy faces a new threat from the evil Kylo Ren (Adam Driver) and the First Order. When a defector named Finn crash-lands on a desert planet, he meets Rey (Daisy Ridley), a tough scavenger whose droid contains a top-secret map.', reviews:[]},
  {id: 12, name: 'Ex Machina', price: 12.99, rating: 3.5, image: 'Pictures/exMachina.jpg', description:'Caleb Smith (Domhnall Gleeson) a programmer at a huge Internet company, wins a contest that enables him to spend a week at the private estate of Nathan Bateman (Oscar Isaac), his firm\'s brilliant CEO. When he arrives, Caleb learns that he has been chosen to be the human component in a Turing test to determine the capabilities and consciousness of Ava (Alicia Vikander), a beautiful robot.', reviews:[]},
]

var users = [
  {name: '', addressOne: '', addressTwo: '', city: '', state: '', zip: '', cardName:'',cardNum:''}
]

function toggle(showPage, hidePage){
  hidePage.className = hidePage.className + ' hidden';
  showPage.className = showPage.className.replace(/hidden/g,' ');
}

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

var returnHomeButton = document.getElementById('returnHome');
returnHomeButton.addEventListener('click', function(theEvent){
  var pageOne = document.getElementById('firstPage');
  var pageTwo = document.getElementById('secondPage');
  var cartInfo = document.getElementById('cartInfo');
  toggle(pageOne, pageTwo);
  clear(newPage);
});

var cart = {
  items: []
}
var orderHistory = {
  purchasedItems: []
}

var results = document.getElementById('results');
results.addEventListener('click', function(theEvent){
  theId = theEvent.target.getAttribute('id');
  var counter = document.getElementById('itemCounter');
  var count = parseInt(counter.textContent);
  if(theId !== null && theId !== 'results'){
    count++;
  }
  counter.textContent = count;

  items.forEach(function(item){
    if (item.id == theId) {
      cart.items.push(item);
    }
  })
});

var subTotal = document.getElementById('subTotal');
subTotal.textContent = "Your cart is empty.";
var sub = 0;
function subTotal(cart){
  var subTotal = document.getElementById('subTotal');
  cart.forEach(function(item){
    sub += cart.item.price;
  })
  subTotal.textContent = "Subtotal: $"+sub;
};

var sub = 0;
var itemCount = 0;
var viewCart = document.getElementById('cartIcon');
viewCart.addEventListener('click',function(theEvent){
  itemCount=0;
  var pageOne = document.getElementById('firstPage');
  var pageTwo = document.getElementById('secondPage');
  var cartInfo = document.getElementById('cartInfo');

  for (var i = 0; i < cart.items.length; i++) {
    var theRow = document.createElement('div');
    theRow.setAttribute('class', 'row cartRow');

    var theImage = document.createElement('div');
    theImage.className = 'col-xs-6 col-offset-xs-1 itemImg';
    var image = document.createElement('img');
    image.src = cart.items[i].image;
    image.setAttribute('class', 'cartItems')
    theImage.appendChild(image);

    var theItem = document.createElement('div');
    theItem.className = "col-xs-3 text-center";
    var itemName = document.createElement('h4');
    itemName.textContent = cart.items[i].name;
    theItem.appendChild(itemName);

    var thePrice = document.createElement('h4');
    thePrice.textContent = "$" + cart.items[i].price;
    thePrice.setAttribute('class','itemPrice col-xs-3 text-center');

    var theDescription = document.createElement('p');
    theDescription.textContent = cart.items[i].description;
    theDescription.setAttribute('class', 'itemDescription');
    theItem.appendChild(theDescription);

    var theSpace = document.getElementById('newPage');
    theRow.appendChild(theImage);
    theRow.appendChild(theItem);
    theRow.appendChild(thePrice);
    theSpace.appendChild(theRow);

    itemCount++;
    function itemCountMessage(itemCount){
      var itemCountMessage;
      if (itemCount == 1){
        itemCountMessage = "1 item";
      }
      else {
        itemCountMessage = itemCount + " items";
      }
      return itemCountMessage;
    }

    var subTotal = document.getElementById('subTotal');
    var items = document.getElementById('itemsSum');
    var shipping = document.getElementById('shipping');
    var tax = document.getElementById('tax');
    var total = document.getElementById('total');
    sub+=parseFloat(cart.items[i].price, 2);
    subTotal.textContent = "Subtotal (" + itemCountMessage(itemCount) + "): $"+sub.toFixed(2);
    itemsSum.textContent = "Items: $" + sub.toFixed(2);
    var shippingAmt = itemCount*3.50;
    shipping.textContent = "Shipping and handling: $" + shippingAmt.toFixed(2);
    var taxAmt = (sub*.07);
    tax.textContent = "Estimated tax: $" + taxAmt.toFixed(2);
    total.textContent = "Order total: $" + (sub+taxAmt+shippingAmt).toFixed(2);

  }
  toggle(pageTwo, pageOne);
});

var checkoutButton = document.getElementById('checkoutButton');
checkoutButton.addEventListener('click',function(theEvent){
  var pageOne = document.getElementById('firstPage');
  var pageTwo = document.getElementById('secondPage');
  var checkoutPage = document.getElementById('checkoutPage');
  if(itemCount == 0){
    toggle(pageOne, pageTwo);
    window.alert("Please add items to your shopping cart.")
  }
  else{toggle(checkoutPage, pageTwo)};
});

var returnToCartButton = document.getElementById('returnToCart');
returnToCartButton.addEventListener('click', function(theEvent){
  var pageTwo = document.getElementById('secondPage');
  var checkoutPage = document.getElementById('checkoutPage');
  toggle(pageTwo, checkoutPage);
});

var payNow = document.getElementById('payNow');
payNow.addEventListener('click', function(theEvent){
  var checkoutPage = document.getElementById('checkoutPage');
  var purchaseSuccessful = document.getElementById('purchaseSuccessful');
  var valid = true;

  if (buyerName.value.indexOf(' ') == -1) {
    window.confirm("Please enter your first and last name.");
    valid = false;
  }

  if (buyerAddress.value.indexOf(' ') == -1) {
    window.confirm("Please enter your street address.");
    valid = false;
  }

  if (buyerCity.value.length == 0) {
    window.confirm("Please enter the name of your city.");
    valid = false;
  }

  if (buyerZip.value.length == 0) {
    window.confirm("Please enter your ZIP code.");
    valid = false;
  }

  if (cardName.value.indexOf(' ') == -1) {
    window.confirm("Please enter your name exactly as it appears on your card.");
    valid = false;
  }

  if (cardNum.value.length != 12) {
    window.confirm("Please enter all twelve digits of the numbers on your card.");
    valid = false;
  }
  if (valid) {
    cart.items.forEach(function(item){
      orderHistory.purchasedItems.push(item.name);
    })
    cart = {
      items: []
    }
    clear(newPage);
    itemCounter.textContent = '0';
    sub = 0;
    itemCount = 0;
    subTotal.textContent = "Your cart is empty.";
    itemsSum.textContent = "Items: $0";
    shipping.textContent = "Shipping and handling: $0";
    tax.textContent = "Estimated tax: $0";
    total.textContent = "Order total: $0";
    buyerName.value = '';
    buyerAddress.value = '';
    buyerAddressTwo.value = '';
    buyerCity.value = '';
    buyerState.value = '';
    buyerZip.value = '';
    cardName.value = '';
    cardNum.value = '';
    toggle(purchaseSuccessful, checkoutPage);
  }
});

var returnToHome = document.getElementById('returnToHome');
returnToHome.addEventListener('click', function(theEvent){
  document.getElementById('results');
  var pageOne = document.getElementById('firstPage');
  var purchaseSuccessful = document.getElementById('purchaseSuccessful');
  toggle(pageOne, purchaseSuccessful);
  clear(results);
});

var returnToHomeButton = document.getElementById('returnToHomeButton');
returnToHomeButton.addEventListener('click', function(theEvent){
  toggle(pageOne, itemPage);
  clear(itemDetails);
  clear(customerReviews);
});


var allItems = document.getElementById('navbar');
var itemPage = document.getElementById('itemPage');
var pageOne = document.getElementById('firstPage');
allItems.addEventListener('click', function(theEvent){
  theId = theEvent.target.getAttribute('id');
  items.forEach(function(item){
    if(item.id-1 == theId){
      var theRow = document.createElement('div');
      theRow.setAttribute('class', 'row itemRow');

      var theImage = document.createElement('div');
      theImage.className = 'col-xs-4 col-offset-xs-1 indItemPic';
      var image = document.createElement('img');
      image.src = items[theId].image;
      image.setAttribute('class', 'indItems col-xs-offset-1 ')
      theImage.appendChild(image);

      var theItem = document.createElement('div');
      theItem.className = "col-xs-6 text-center indItemDetails";
      var itemName = document.createElement('h4');
      itemName.textContent = items[theId].name;
      theItem.appendChild(itemName);

      var theDescription = document.createElement('p');
      theDescription.textContent = items[theId].description;
      theDescription.setAttribute('class', 'itemDescription');
      theItem.appendChild(theDescription);

      var theRating = document.createElement('h4');
      theRating.textContent = "Rating: "+items[theId].rating +"/5";
      theItem.appendChild(theRating);

      var thePrice = document.createElement('h4');
      thePrice.textContent = "$" + items[theId].price;
      thePrice.setAttribute('class','itemPrice text-center');
      theItem.appendChild(thePrice);

      var reviewBox = document.createElement('div');
      reviewBox.className = 'col-xs-6 col-xs-offset-3 panel panel-default';
      theItem.appendChild(reviewBox);

      var reviewBoxTitle = document.createElement('h4');
      reviewBoxTitle.className = 'panel panel-heading';
      reviewBox.appendChild(reviewBoxTitle);
      reviewBoxTitle.textContent = 'Leave a review for '+items[theId].name;

      var reviewBoxContent = document.createElement('input');
      reviewBoxContent.className = 'col-xs-10 col-xs-offset-1';
      reviewBoxContent.setAttribute('type','text');
      reviewBoxContent.setAttribute('style', 'height:30px')
      reviewBox.appendChild(reviewBoxContent);

      var submitReview = document.createElement('button');
      submitReview.textContent = 'Submit';
      submitReview.id = 'submitReview';
      reviewBox.appendChild(submitReview);

      submitReview.addEventListener('click', function(theEvent){
        var individualReview = "-"+ reviewBoxContent.value;
        items[theId].reviews.push(individualReview);
      })

      var addToCart = document.createElement('button');
      addToCart.setAttribute('class','addToCart');
      addToCart.textContent = "Add to Cart";
      addToCart.addEventListener('click', function(theEvent){
        cart.items.push(items[theId]);
        var counter = document.getElementById('itemCounter');
        var count = parseInt(counter.textContent);
        count++;
        counter.textContent = count;
      })


      for (var i = 0; i < items[theId].reviews.length; i++) {
        var customerReviews = document.getElementById('customerReviews');
        var review = document.createElement('p');
        review.textContent=items[theId].reviews[i];
        var reviewContainer = document.createElement('div');
        reviewContainer.setAttribute('id','reviewContainer');
        reviewContainer.setAttribute('class','col-xs-12 text-center');
        reviewContainer.appendChild(review);
        customerReviews.appendChild(reviewContainer);
      }

      theRow.appendChild(theImage);
      theRow.appendChild(theItem);
      itemDetails.appendChild(addToCart);
      itemDetails.appendChild(theRow);

      toggle(itemPage, pageOne);
    }
  })
});
