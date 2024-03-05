function redirect() {
    window.location.href = "./index.html"
}

document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
    displayCart();

});

function displayCart() {
    // Get the cart element from the HTML
    const cartElement = document.getElementById('cart');
  
    // Get the cart items from LocalStorage
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];
  
    // Remove any existing items in the cart area
    cartElement.innerHTML = '';
  
    // Loop through the cart items
    cartItems.forEach(item => {
      // Create an HTML representation of the item
      const cartItemElement = document.createElement('div');
      cartItemElement.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <img src="${item.Image}" alt="${item.name}" width="100" />
      `;
  
      // Add the cart item to the cart area
      cartElement.appendChild(cartItemElement);
    });
  }



function addToCart(event) {
    const button = event.target;
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    const Image = button.dataset.Image;

    // Create an object representing the item
    const newItem = {
        name: name,
        price: price,
        Image: Image
    };

    // Retrieve existing cart items from LocalStorage
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    // Add the new item to the cart
    cartItems.push(newItem);

    // Store the updated cart items back to LocalStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Alert the user that the item has been added to the cart (optional)
    // alert('Item added to cart!');

    displayCart();
}
