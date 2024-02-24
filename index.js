function redirect() {
    window.location.href = "./index.html"
}

document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

});
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
}
