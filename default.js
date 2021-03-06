items = [
  {id: 0, name: 'dummy', price: 0, brand: 'dummy', rating: 0, image: 'N/A', description: '', reviews: '', rating:0},
  {id: 1, name: 'Samsung Television', department: 'electronics', price: 499.99, brand: 'Samsung', rating: 4, image: 'Pictures/samsung.jpg', description: 'Enjoy Full HD viewing and enriched colors on this Samsung HDTV. Its Smart TV features let you stream videos and music, surf the Internet, download apps and more. Plus, watch your TV entertainment on your mobile device or vice versa.', reviews:['-Looks great in my living room!'], quantity: 0, purchased: 0},
  {id: 2, name: 'Apple iPhone 6s', department: 'electronics', price: 399.99, brand: 'Apple', rating: 4.5, image: 'Pictures/iphones.jpeg', description: 'The moment you use iPhone 6s, you know you’ve never felt anything like it. With a single press, 3D Touch lets you do more than ever before. Live Photos bring your memories to life in a powerfully vivid way. And that’s just the beginning. Take a deeper look at iPhone 6s, and you’ll find innovation on every level.', reviews:['-So many apps.'], quantity: 0, purchased: 0, timesBought: 0},
  {id: 3, name: 'Vizio Laptop', department: 'electronics', price: 199.99, brand: 'Vizio', rating: 3, image: 'Pictures/vizio.jpeg', description: 'The remarkably powerful and beautifully portable VIZIO Notebook PC is packed with premium entertainment features, from Full HD display and premium audio to enhanced graphics, to let you work all day and play all night.', reviews:['-Such enhanced graphics.'], quantity: 0, purchased: 0},
  {id: 4, name: 'Apple MacBook Pro', department: 'electronics', price: 1299.99, brand: 'Apple', rating: 4.5, image: 'Pictures/macbook.jpeg', description: 'Apple - MacBook Pro with Retina display (Latest Model) - 13.3" Display - 8GB Memory - 512GB Flash Storage - Silver', reviews:['-I went on the internet!'], quantity: 0, purchased: 0},
  {id: 5, name: 'Harry Potter: Chamber of Secrets', department: 'books', price: 12.99, author: 'J.K. Rowling', rating: 5, image: 'Pictures/harry.jpg', description: 'Young wizard Harry Potter and his friends, Ron and Hermione, face new challenges during their second year at Hogwarts School of Witchcraft and Wizardry as they try to discover a dark force that is terrorizing the school.', reviews:["-<3 Harry"], quantity: 0, purchased: 0},
  {id: 6, name: 'How to Win Friends & Influence People', department: 'books', price: 8.99, author: 'Dale Carnegie', rating: 5, image: 'Pictures/winFriends.jpg', description: 'Written by Dale Carnegie and first published in 1936, it has sold over 30 million copies world-wide, and went on to be named #19 on Time Magazine\'s list of 100 most influential books in 2011.', reviews:['-Blew my mind.'], quantity: 0, purchased: 0},
  {id: 7, name: 'A Universe From Nothing', department: 'books', price: 11.99, author: 'Lawrence M Krauss', rating: 3.5, image: 'Pictures/universe.jpeg', description: 'A Universe from Nothing: Why There Is Something Rather than Nothing is a book by physicist Lawrence M. Krauss, initially published on January 10, 2012 by Free Press.', reviews:['-Fascinating book!'], quantity: 0, purchased: 0},
  {id: 8, name: 'The Big Picture', department: 'books', price: 9.99, author: 'Sean Carroll', rating: 4, image: 'Pictures/bigPicture.jpeg', description: 'Already internationally acclaimed for his elegant, lucid writing on the most challenging notions in modern physics.', reviews:['-This book is interesting!'], quantity: 0, purchased: 0},
  {id: 9, name: 'Interstellar', department: 'movies', price: 12.99, rating: 2.5, image: 'Pictures/interstellar.jpeg', description: 'In Earth\'s future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth\s population to a new home via a wormhole.', reviews:['-Made me hungry for corn.'], quantity: 0, purchased: 0},
  {id: 10, name: 'Deadpool', department: 'movies', price: 11.99, rating: 4, image: 'Pictures/deadpool.jpg', description: 'Wade Wilson (Ryan Reynolds) is a former Special Forces operative who now works as a mercenary. His world comes crashing down when evil scientist Ajax (Ed Skrein) tortures, disfigures and transforms him into Deadpool. The rogue experiment leaves Deadpool with accelerated healing powers and a twisted sense of humor.', reviews:['-Entertaining for sure.'], quantity: 0, purchased: 0},
  {id: 11, name: 'Star Wars: The Force Awakens', department: 'movies', price: 13.99, rating: 5, image: 'Pictures/starWars.jpg', description: 'Thirty years after the defeat of the Galactic Empire, the galaxy faces a new threat from the evil Kylo Ren (Adam Driver) and the First Order. When a defector named Finn crash-lands on a desert planet, he meets Rey (Daisy Ridley), a tough scavenger whose droid contains a top-secret map.', reviews:['-Excited for the next ones!'], quantity: 0, purchased: 0},
  {id: 12, name: 'Ex Machina', department: 'movies', price: 12.99, rating: 3.5, image: 'Pictures/exMachina.jpg', description:'Caleb Smith (Domhnall Gleeson) a programmer at a huge Internet company, wins a contest that enables him to spend a week at the private estate of Nathan Bateman (Oscar Isaac), his firm\'s brilliant CEO. When he arrives, Caleb learns that he has been chosen to be the human component in a Turing test to determine the capabilities and consciousness of Ava (Alicia Vikander), a beautiful robot.', reviews:['-Skynet online...'], quantity: 0, purchased: 0},
  {id: 13, name: 'Captain America: Civil War', department: 'movies', price: 12.99, rating: 4.5, image: 'Pictures/civilWar.jpeg', description:'Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The new status quo deeply divides members of the team. Captain America (Chris Evans) believes superheroes should remain free to defend humanity without government interference.', reviews:['-Needs more backstories.'], quantity: 0, purchased: 0},
]

function toggle(showPage, hidePage){
  hidePage.className = hidePage.className + ' hidden';
  showPage.className = showPage.className.replace(/hidden/g,' ');
}

function match(input, list){
  var theItems = [];
  list.forEach(function(item){
    if (item.name.toLowerCase().indexOf(input.toLowerCase()) !== -1 && item.id != 0) {
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

  var resultsRow = document.createElement('div');
  resultsRow.setAttribute('class', 'row resultsRow');
  var theImage = document.createElement('div');
  theImage.className = 'col-xs-6 col-offset-xs-1 resultsImg';
  var image=document.createElement('img');
  image.src = data.image;
  image.setAttribute('class', 'resultsItems');
  theImage.appendChild(image);

  var theItem = document.createElement('div');
  theItem.className = "col-xs-3 text-center";
  var itemName = document.createElement('h4');
  itemName.textContent = data.name;
  theItem.appendChild(itemName);

  var thePrice = document.createElement('h4');
  thePrice.textContent = "$" + data.price;
  thePrice.setAttribute('class','itemPrice col-xs-3 text-center');

  var theDescription = document.createElement('p');
  theDescription.textContent = data.description;
  theDescription.setAttribute('class', 'itemDescription');
  theItem.appendChild(theDescription);

  var theQuantity = document.createElement('div');
  theQuantity.textContent = "Quantity: " + data.quantity;
  theQuantity.setAttribute('class', 'itemQuantity text-center');

  var addToCartButton = document.createElement('button');
  addToCartButton.setAttribute('id',data.id);
  addToCartButton.innerHTML = 'Add to Cart';
  theItem.appendChild(addToCartButton);

  resultsRow.appendChild(theImage);
  resultsRow.appendChild(theItem);
  resultsRow.appendChild(thePrice);

  return resultsRow;
}

function clear(element){
  while(element.firstChild){
    element.removeChild(element.firstChild)
  }
}

var searchButton = document.getElementById('search');
searchButton.addEventListener('click', function(theEvent){
  var firstPage = document.getElementById('firstPage');
  var resultsPage = document.getElementById('resultsPage');
  toggle(resultsPage, firstPage);
  var results = document.getElementById('results');
  clear(results);
  var input = document.getElementById('input');
  var title = document.getElementById('suggestionBox');
  show(match(input.value, items));
});

var returnHomeNowButton = document.getElementById('returnHomeNow');
returnHomeNowButton.addEventListener('click', function(e){
  var firstPage = document.getElementById('firstPage');
  var resultsPage = document.getElementById('resultsPage');
  toggle(firstPage, resultsPage);
})

var returnHomeButton = document.getElementById('returnHome');
returnHomeButton.addEventListener('click', function(theEvent){
  var pageOne = document.getElementById('firstPage');
  var pageTwo = document.getElementById('secondPage');
  var cartInfo = document.getElementById('cartInfo');
  toggle(pageOne, pageTwo);
  clear(newPage);
});

var cart = {
  items: [],
}
var orderHistory = {
  purchasedItems: [],
}

var recommendations = {
  recommendedItemsArr: []
}

var users = {
    user: []
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
      if(item.quantity == 0){
        cart.items.push(item);
        item.quantity++;
      }
      else{item.quantity++};
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
var itemQuantity = 0;
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


    var theQuantity = document.createElement('div');
    theQuantity.textContent = "Quantity: " + cart.items[i].quantity;
    theQuantity.setAttribute('class', 'itemQuantity text-center');

    var theSpace = document.getElementById('newPage');
    theRow.appendChild(theImage);
    theRow.appendChild(theItem);
    theRow.appendChild(thePrice);
    thePrice.appendChild(theQuantity);
    theSpace.appendChild(theRow);

    itemCount+=cart.items[i].quantity;
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
    sub+=parseFloat(cart.items[i].price*cart.items[i].quantity, 2);
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

  function formValid(condition, group, name){
    if(condition){
      group.className = group.className.replace(/valid/g," ");
      name.className = name.className.replace(/valid/g,' ');
      group.className += " invalid";
      name.className += " invalid";
      valid = false;
    }
    else{
      group.className = group.className.replace(/invalid/g,' ');
      name.className = name.className.replace(/invalid/g,' ');
      group.className += " valid";
      name.className += " valid";
    }
    return valid;
  }

  formValid(buyerName.value.indexOf(' ') == -1, buyerNameGroup, buyerName);
  formValid(buyerAddress.value.indexOf(' ') == -1, buyerAddressGroup, buyerAddress);
  formValid(cardName.value.indexOf(' ') == -1, cardNameGroup, cardName);
  formValid(buyerCity.value.length == 0, buyerCityGroup, buyerCity);
  formValid(buyerZip.value.length != 5, buyerZipGroup, buyerZip);
  formValid(cardNum.value.length != 12, cardNumGroup, cardNum);
  formValid(buyerState.value.length == 0, buyerStateGroup, buyerState);

  if (valid) {
    toggle(purchaseSuccessful, checkoutPage);

    for (var i = 0; i < items.length; i++) {
      items[i].timesBought += 1;
      items[i].purchased += items[i].quantity;
      items[i].quantity = 0;
    }
    cart.items.forEach(function(item){
      orderHistory.purchasedItems.push(item);
    })
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

    cart = {
      items: []
    }
  }
  //Fills recommended items array based purely off of items are in the same department
  items.forEach(function(item){
    for (var i = 0; i < orderHistory.purchasedItems.length; i++) {
      if (item.name != orderHistory.purchasedItems[i].name && item.department == orderHistory.purchasedItems[i].department) {
        recommendations.recommendedItemsArr.push(item);
      }
    }
  });

  var recommendedItemsInd = document.getElementById('recommendedItems');
  var recommendedItems = document.getElementById('recommendedItems');
  for (var i = 0; i < recommendations.recommendedItemsArr.length; i++) {
    var theName = document.createElement('p');
    theName.textContent = recommendations.recommendedItemsArr[i].name;
    if (recommendedItems.textContent.indexOf(theName) == -1) {
      for (var j = 0; j < recommendations.recommendedItemsArr.length; j++) {
        if (recommendations.recommendedItemsArr[i].name == recommendations.recommendedItemsArr[j].name){
            recommendations.recommendedItemsArr.splice(i,1);
          }
        }
      var theImage = document.createElement('img');
      theImage.src = recommendations.recommendedItemsArr[i].image;
      theImage.setAttribute('height', '200px');
      theImage.setAttribute('margin-left','5%');
      var theBox = document.createElement('div');
      theBox.setAttribute('max-width', '150px');
      theBox.setAttribute('class','col-xs-3')
      theBox.appendChild(theImage);
      theBox.appendChild(theName);
      recommendedItemsInd.appendChild(theBox);
    }
  }
});



var returnToHome = document.getElementById('returnToHome');
returnToHome.addEventListener('click', function(theEvent){
  document.getElementById('results');
  var pageOne = document.getElementById('firstPage');
  var purchaseSuccessful = document.getElementById('purchaseSuccessful');
  toggle(pageOne, purchaseSuccessful);
  clear(results);
  var recommendedRow = document.getElementById('recommendedItemsRow');
  recommendedRow.className = recommendedRow.className.replace('hidden',' ');
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
    if(item.id == theId){
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

        if(item.quantity == 0){
          cart.items.push(item);
          item.quantity++;
        }
        else{item.quantity++};

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

var returnBackToHome = document.getElementById('returnBackToHome');
returnBackToHome.addEventListener('click', function(theEvent){
  document.getElementById('results');
  var pageOne = document.getElementById('firstPage');
  var historyPage = document.getElementById('historyPage');
  clear(purchasedItemsList);
  toggle(pageOne, historyPage);
});

var viewHistory = document.getElementById('historyIcon');
viewHistory.addEventListener('click', function(theEvent){

  var purchasedItemsList = document.getElementById('purchasedItemsList');
  var historyPage = document.getElementById('historyPage');
  var pageOne = document.getElementById('firstPage');
  toggle(historyPage, pageOne);

  var purchasedList = document.createElement('ul');
  for (var i = 0; i < orderHistory.purchasedItems.length; i++) {
    var purchasedItem = document.createElement('li');
    purchasedItem.setAttribute('id','purchasedItem'+i);


    if(purchasedList.textContent.indexOf(orderHistory.purchasedItems[i].name) == -1){
      purchasedItem.textContent = orderHistory.purchasedItems[i].name +"- Quantity: " +orderHistory.purchasedItems[i].purchased;
      purchasedList.appendChild(purchasedItem);
      purchasedItemsList.appendChild(purchasedList);
    }
  }
})
