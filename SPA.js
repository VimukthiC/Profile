document.getElementById("dash").style.display="block";
document.getElementById("cus").style.display="none";
document.getElementById("item").style.display="none";
document.getElementById("order").style.display="none";

document.getElementById("navbarHome").addEventListener("click", function () {
    document.getElementById("dash").style.display="block";
    document.getElementById("cus").style.display="none";
    document.getElementById("item").style.display="none";
    document.getElementById("order").style.display="none";

});

document.getElementById("navbarCus").addEventListener("click", function () {
    document.getElementById("dash").style.display="none";
    document.getElementById("cus").style.display="block";
    document.getElementById("item").style.display="none";
    document.getElementById("order").style.display="none";

});

document.getElementById("navbarItem").addEventListener("click", function () {
    document.getElementById("dash").style.display="none";
    document.getElementById("cus").style.display="none";
    document.getElementById("item").style.display="block";
    document.getElementById("order").style.display="none";

});

document.getElementById("navbarOrder").addEventListener("click", function () {
    document.getElementById("dash").style.display="none";
    document.getElementById("cus").style.display="none";
    document.getElementById("item").style.display="none";
    document.getElementById("order").style.display="block";

});