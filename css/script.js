function addToCart(dish, price) {
    const selectedItemsElement = document.getElementById('selected-items');
    const totalPriceElement = document.getElementById('total-price');

    const listItem = document.createElement('li');
    listItem.innerText = `${dish} - $${price}`;
    selectedItemsElement.appendChild(listItem);
    const totalPrice=document.getElementById('total');
      var totalPPrice = parseInt(totalPrice.innerText);
      totalPPrice+=parseInt(price);
    
    
   
    totalPriceElement.innerText = "Total Price: $" 
    document.getElementById('total').innerHTML= totalPPrice;
    console.log(totalPPrice);
}

function confirmOrder() {
  const totalPrice=document.getElementById('total');
  const totalPriceElement = document.getElementById('total-price');
  totalPriceElement.innerText = "Total Bill paid: $" 
  
}

