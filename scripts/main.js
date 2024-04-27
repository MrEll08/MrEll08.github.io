document.querySelector("html").onclick = function() {
    alert("Не тыкай, лох!");
};

var mybutton = document.querySelector("button");
mybutton.onclick = function() {
    // for (var i = 1; i <= 5; ++i) {
    //     window.open('https://www.example.com', '_blank');
    // }
    var myimg = document.querySelector("img");
    var now = myimg.getAttribute("src");
    if (now === "images/ti-loh.jpg") {
        myimg.setAttribute("src", "images/ti-daun.jpg");
        mybutton.textContent = "НЕТ, Я НЕ ДАУН!";
    } else {
        myimg.setAttribute("src", "images/ti-loh.jpg");
        mybutton.textContent = "НЕТ, Я НЕ ЛОХ!";
    }
}

