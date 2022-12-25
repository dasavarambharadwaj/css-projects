var elements = document.querySelectorAll(".panel");

var myFunction = function(event) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('active')
    }
    event.currentTarget.classList.add('active')
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction);
}