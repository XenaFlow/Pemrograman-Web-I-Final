// Fungsi untuk menambahkan item ke localStorage (Berlaku untuk halaman detail game)
function addToCart(gameName, gamePrice, gameImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    let newGame = {
        name: gameName,
        price: gamePrice,
        image: gameImage
    };
    
    cart.push(newGame);
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert(gameName + ' berhasil ditambahkan ke keranjang!');
    
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCountElement = document.getElementById('cart-count');
    
    if (cartCountElement) {
        cartCountElement.innerText = cart.length;
    }
}

window.onload = function() {
    updateCartCount();
};