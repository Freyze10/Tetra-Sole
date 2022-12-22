function optionOpen() {
    let nav = document.querySelector('.navigation');
    nav.style.right = "0px";
};
function optionClose() {
    let nav = document.querySelector('.navigation');
    nav.style.right = "-100%";
};

// CART

function cartOpen() {
    document.querySelector('.cart').style.right = '0';
};
function cartClose() {
    document.querySelector('.cart').style.right = '-100%';
};

//Cart works
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}
//Making Function
function ready() {
    // remove items from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');

    for(var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    // add to cart
    var addcart = document.getElementsByClassName('add-to-cart');
    for(var i = 0; i < addcart.length; i++) {
        var button = addcart[i];
        button.addEventListener("click", addCartClicked);
    }
};
// for total cart item
let i = 0;

// Remove Items from cart
function removeCartItem(e) {
    i--;
    var buttonClicked = e.target;
    var price = buttonClicked.parentElement.getElementsByClassName('price')[0].getAttribute('price');
    updateTotalLess(price);
    buttonClicked.parentElement.remove();
    // for total cart item
    document.getElementById('total').innerHTML = i;
};

// add to cart
function addCartClicked(e) {
    i++;
    var button = e.target
    var shopProducts = button.parentElement
    var title = shopProducts.parentElement.getElementsByClassName('shoe-name')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].getAttribute('price');
    var productImg = shopProducts.parentElement.parentElement.getElementsByClassName('image-container')[0].innerHTML;
    addProductToCart(title, price, productImg);
    updateTotal(price);
    // for total cart item
    document.getElementById('total').innerHTML = i;
}
function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartBoxContent =`
                        <div>${productImg}</div>
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price price" price="${price}">Php. ${price}.00</div>
                            <label for="size">Size: <input type="number" name="size" min="36" max="46" value="40" class="cart-shoe-size"></label>
                        </div>
                        <i class="fa-solid fa-trash cart-remove"></i> `;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
}

// Update Total
var total = 0;
function updateTotal(price) {
        total += parseInt(price);
        document.getElementsByClassName('total-price')[0].innerText = "Php. " + total + ".00";
}
function updateTotalLess(price) {
        total -= parseInt(price);
        document.getElementsByClassName('total-price')[0].innerText = "Php. " + total + ".00";
}

// Buy Button
document.getElementsByClassName('btn-buy')[0].addEventListener('click', () => {
    let address = prompt("\tPlease Fill The Address to Complete your Order! :) \n\nEnter your Address:")
    if (address != null && address.length != 0) {
        alert('Your order has been Placed');
        let cartContent = document.getElementsByClassName('cart-content')[0];
        while (cartContent.hasChildNodes()) {
            cartContent.removeChild(cartContent.firstChild);
        }
        i = 0;
        document.getElementsByClassName('total-price')[0].innerText = "Php. 0.00";
        document.getElementById('total').innerHTML = i;
    } else {
        alert("Address Cannot be Empty");
    }
});

// contact us submit form
function contactSubmit() {
    alert("\n  ~~~~~~~~~~~~~~~~~~~~~~~\n   |< Thank You for Contacting us! >|\n  ~~~~~~~~~~~~~~~~~~~~~~~\n\n\tWe'll respond as soon as posible!!");
}

// Footer Join Us
function joinUs() {
    let emailUps = document.querySelector(".email-contain");
    let email = document.getElementById("email-updates");
    let joinMessage = document.querySelector(".joined-message");

    if (email.value.length > 0) {
        emailUps.style.display = "none";
        joinMessage.style.display = "block";
    }
}