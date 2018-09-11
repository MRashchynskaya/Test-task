var modal = document.getElementById('delete-modal');

var currentCard;
function cardToDelete() {
    currentCard = this.parentNode;
    return currentCard;
}

function showModal() {
    // cardToDelete();
    modal.removeAttribute('hidden');
}

let btn = document.querySelectorAll(".products__card-delete");

function bindEvent () {
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', showModal);
    }
}

bindEvent ();

window.onclick = function (event) {
    if (event.target == modal) {
        modal.setAttribute("hidden", "hidden");
    }
};

var btnDel = document.querySelector(".btn-del");
// var card = document.querySelector(".products__card");
var productsList = document.querySelector(".products__card-wrap");

btnDel.addEventListener('click', deleteCard);

function deleteCard () {
    productsList.removeChild(currentCard);
    modal.setAttribute("hidden", "hidden");
}
