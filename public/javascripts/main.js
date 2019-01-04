function togglePass() {
    var el = document.querySelector('.eye-icon');
    console.log(el);
    el = el.firstElementChild;
    console.log(el);
    if (el.style.color == "black") {
        el.style.color = "darkgrey";
    } else {
        el.style.color = "black";
    }
    el = document.querySelector(".password-input")
    if (el.type === "password") {
        el.type = "text";
    } else {
        el.type = "password";
    }
}

function addMember() {
    var members = document.querySelector(".dynamic-parts");
    console.log(members);
    var clone = members.firstElementChild.cloneNode(true);
    members.appendChild(clone);
}

function login() {
    var el = document.querySelector(".container");
    el.classList.add("blur");
    console.log("zz");
    el = document.querySelector(".loading");
    el.style.display = "block";
    el.classList.add("loading-on");
}