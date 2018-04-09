let apple = {productname:"Apple", price:400, description:"This is an apple", image:"../images/apple.png"};
let pear = {productname:"Pear", price:600, description:"This is a pear", image:"../images/pear.png"};
let orange = {productname:"Orange", price:500, description:"This is an orange", image:"../images/orange.png"};
let lime = {productname:"Lime", price:800, description:"This is a lime", image:"../images/lime.png"};
let melon = {productname:"Melon", price:500, description:"This is a melon", image:"../images/melon.png"};
let grapes = {productname:"Grapes", price:1000, description:"This is grapes", image:"../images/grapes.png"};

let objectsArray = [apple, pear, orange, lime, melon, grapes];

let productImage = document.getElementsByClassName("productimageslist");
for (let images = 0; images < productImage.length; images++) {
    productImage[images].setAttribute("src", objectsArray[images].image);
}

let productPrice = document.getElementsByClassName("pPrice");
for (let prices = 0; prices < productPrice.length; prices++) {
    productPrice[prices].innerHTML = objectsArray[prices].price + ":-";
}

let productDescription = document.getElementsByClassName("pDescription");
for (let descriptions = 0; descriptions < productDescription.length; descriptions++) {
    productDescription[descriptions].innerHTML = objectsArray[descriptions].description;
}

let productHeader = document.querySelectorAll("h1");
for (let headers = 0; headers < productHeader.length; headers++) {
    productHeader[headers].innerHTML = objectsArray[headers].productname;
}

let addApple = document.getElementById("applecartbutton");
let addPear = document.getElementById("pearcartbutton");
let addOrange = document.getElementById("orangecartbutton");
let addLime = document.getElementById("limecartbutton");
let addMelon = document.getElementById("meloncartbutton");
let addGrapes = document.getElementById("grapescartbutton");
let cartNumber = $(".cartnumber");

let cart = JSON.parse(localStorage.getItem("products")) || [];

function addAppleToCart() {
    cart.push(apple);
    localStorage.setItem("products", JSON.stringify(cart));
}

function addPearToCart() {
    cart.push(pear);
    localStorage.setItem("products", JSON.stringify(cart));
}

function addOrangeToCart() {
    cart.push(orange);
    localStorage.setItem("products", JSON.stringify(cart));
}

function addLimeToCart() {
    cart.push(lime);
    localStorage.setItem("products", JSON.stringify(cart));
}

function addMelonToCart() {
    cart.push(melon);
    localStorage.setItem("products", JSON.stringify(cart));
}

function addGrapesToCart() {
    cart.push(grapes);
    localStorage.setItem("products", JSON.stringify(cart));
}

addApple.addEventListener("click", function() {
    addAppleToCart();
    calculateQuantity()
});
addPear.addEventListener("click", function() {
    addPearToCart();
    calculateQuantity()
});
addOrange.addEventListener("click", function() {
    addOrangeToCart();
    calculateQuantity()
});
addLime.addEventListener("click", function() {
    addLimeToCart();
    calculateQuantity()
});
addMelon.addEventListener("click", function() {
    addMelonToCart();
    calculateQuantity()
});
addGrapes.addEventListener("click", function() {
    addGrapesToCart();
    calculateQuantity()
});

function calculateQuantity() {
    let quantity = JSON.parse(localStorage.getItem("products")) || [];
    cartNumber.text(quantity.length);
}
calculateQuantity();
