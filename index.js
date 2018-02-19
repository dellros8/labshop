let apple = {
    productname:"Apple",
    price:400,
    description:"This is an apple",
    image:"images/apple.png"
};

let pear = {
    productname:"Pear",
    price:600,
    description:"This is a pear",
    image:"images/pear.png"
};

let orange = {
    productname:"Orange",
    price:500,
    description:"This is an orange",
    image:"images/orange.png"
};

let lime = {
    productname:"Lime",
    price:800,
    description:"This is a lime",
    image:"images/lime.png"
};

let melon = {
    productname:"Melon",
    price:500,
    description:"This is a melon",
    image:"images/melon.png"
};

let grapes = {
    productname:"Grapes",
    price:1000,
    description:"This is grapes",
    image:"images/grapes.png"
};

let objectsArray = [apple, pear, orange, lime, melon, grapes];

let productImage = document.querySelectorAll("img");
for (var i = 0; i < productImage.length; i++) {
    productImage[i].setAttribute("src", objectsArray[i].image);
}

let productPrice = document.getElementsByClassName("pPrice");
for (var j = 0; j < productPrice.length; j++) {
    productPrice[j].innerHTML = objectsArray[j].price + ":-";
}

let productDescription = document.getElementsByClassName("pDescription");
for (var k = 0; k < productDescription.length; k++) {
    productDescription[k].innerHTML = objectsArray[k].description;
}

let productHeader = document.querySelectorAll("h1");
for (var n = 0; n < productHeader.length; n++) {
    productHeader[n].innerHTML = objectsArray[n].productname;
}

function validateForm() {
    var fname = document.getElementById("inputone");
    var lname = document.getElementById("inputtwo");
    var email = document.getElementById("inputthree");
    var address = document.getElementById("inputfive");
    var zip = document.getElementById("inputsix");
    var city = document.getElementById("inputseven");

    var mailformat = /^([A-Za-z0-9_.\-]){1,200}@([A-Za-z0-9_.\-]){1,200}\.([A-Za-z]){2,6}$/;
    var numberformat = /^([0-9]){3,30}$/;

    if (fname.value == "" || lname.value == "" || email.value == "" || address.value == "" || zip.value == "" || city.value == "" || mailformat.test(email.value) == false || numberformat.test(zip.value) == false) {
        alert("All fields needs to be filled properly");
        return false;
    }
    else {
        alert("Success! Your order has been placed!");
    }
}