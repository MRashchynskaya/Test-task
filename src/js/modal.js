var modal = document.getElementById('delete-modal');

var currentCard;
function cardToDelete() {
    currentCard = this.parentNode;
    return currentCard;
}

function showModal() {
    modal.removeAttribute('hidden');
    $('body').css({ 'overflow-y': "hidden" });
}

function closeModal() {
    modal.setAttribute("hidden", "hidden");
    $('body').css({ 'overflow-y': "scroll" });
}

let btn = document.querySelectorAll(".products__card-delete");
let btnCloseModal = document.querySelector(".close-modal");

function bindEvent () {
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', showModal);
    }
}

bindEvent ();

window.onclick = function (event) {
    if (event.target == modal) {
        modal.setAttribute("hidden", "hidden");
        $('body').css({ 'overflow-y': "scroll" });
    }
};

var btnDel = document.querySelector(".btn-del");
// var card = document.querySelector(".products__card");
var productsList = document.querySelector(".products__card-wrap");

btnDel.addEventListener('click', deleteCard);
btnCloseModal.addEventListener('click', closeModal);

function deleteCard () {
    productsList.removeChild(currentCard);
    modal.setAttribute("hidden", "hidden");
}
