$("form").on("submit", function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let fname = document.getElementById("inputone");
    let lname = document.getElementById("inputtwo");
    let email = document.getElementById("inputthree");
    let address = document.getElementById("inputfive");
    let zip = document.getElementById("inputsix");
    let city = document.getElementById("inputseven");

    let mailformat = /^([A-Za-z0-9_.\-]){1,200}@([A-Za-z0-9_.\-]){1,200}\.([A-Za-z]){2,6}$/;
    let numberformat = /^([0-9]){3,30}$/;

    if (fname.value == "" || lname.value == "" || email.value == "" || address.value == "" || zip.value == "" || city.value == "" || mailformat.test(email.value) == false || numberformat.test(zip.value) == false) {
        alert("All fields needs to be filled properly");
        return false;
    }
    else {
        alert("Success! Your order has been placed!");
    }
}

let checkoutCart = JSON.parse(localStorage.getItem("products")) || [];

function calculateQuantityProduct(product) {
    let quantity = 0;
    for (let item of checkoutCart) {
        if  (item.productname === product.productname) {
            quantity ++;
        }
    }
    return quantity;
}

function calculateQuantity() {
    let quantity = JSON.parse(localStorage.getItem("products")) || [];
    $(".cartnumber").text(quantity.length);
}

function buildProductInCart(item) {
    let cartList = $("#cartlist");
    let productDiv = $("<div></div>").addClass("productdiv");
    let name = $("<p></p>").text(item.productname);
    let price = $("<p></p>").addClass("price").text(item.price + ":-");
    let buttonminus = $("<button></button>").addClass("minusone").text("-");
    let buttonplus = $("<button></button>").addClass("plusone").text("+");
    let count = $("<p></p>").addClass("count").text(`${(calculateQuantityProduct(item))}`);
    $(".minusone").on("click", function() {
        let count = $(this).closest('.productdiv').find('.count');
        let quantity = count.text();
        if (quantity < 1) {
            return;
        } else {
            quantity--;
            item.price--;
        }
        count.text(quantity);
    });
    $(".plusone").on("click", function() {
        let count = $(this).closest('.productdiv').find('.count');
        let quantity = count.text();
        quantity++;
        count.text(quantity);
    });
    let image = $("<img>").addClass("productimagesincart").attr("src", item.image);
    productDiv.append(name, image, buttonminus, count, buttonplus, price);
    cartList.append(productDiv);
}

function loadItems() {
    let deDuplicatedArray = checkoutCart.filter((product, index, checkoutCart) => {
        return checkoutCart.map(object => {
            return object["productname"]}).indexOf(product["productname"]) === index;
    });

    if (checkoutCart === null) {
        console.log("No items added to cart!")
    }
    else {
        deDuplicatedArray.forEach(function(product){
            buildProductInCart(product)
        })
    }
}

loadItems();
calculateQuantity();
