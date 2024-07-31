const products = [
    { id: 1, name: 'Reimu Hakurei', price: 4350, image: 'https://m.media-amazon.com/images/I/51giFSLl2BL._AC_SX679_.jpg' },
    { id: 2, name: 'Marisa Kirisame', price: 4350, image: 'https://m.media-amazon.com/images/I/51RWb6f7q7L._AC_SX679_.jpg' },
    { id: 3, name: 'Flandre Scarlet', price: 4730, image: 'https://m.media-amazon.com/images/I/51gmuPeAALL._AC_SY879_.jpg' },
    { id: 4, name: 'Cirno', price: 9999, image: 'https://m.media-amazon.com/images/I/51G22XSlZDL._AC_SX679_.jpg' },
    { id: 5, name: 'Remilia Scarlet', price: 5230, image: 'https://m.media-amazon.com/images/I/719eC0AWizS._AC_SY879_.jpg' },
    { id: 6, name: 'Koishi Komeiji', price: 3970, image: 'https://m.media-amazon.com/images/I/51KZH9kCq7L._AC_SX679_.jpg' },
    { id: 7, name: 'Satori Komeiji', price: 3880, image: 'https://m.media-amazon.com/images/I/51XBYkwwgiL._AC_SX679_.jpg' },
];

const cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        displayCart();
    }
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price}</p>
        `;
        cartItems.appendChild(cartItem);
    });
}


document.getElementById('checkout').addEventListener('click', () => {
    alert('ขอบคุณที่มาอุดหนุน');
    cart.length = 0;
    displayCart();
});

displayProducts();