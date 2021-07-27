const $modal = document.getElementById("modal");
const $subHeaderView = document.getElementById("sub")
const $listPositionView = document.getElementById("listPosition")
const $btnModal = document.getElementById("btn-Modal");


$btnModal.addEventListener("click", openModal)

function openModal(){
    $modal.classList.add("opened");
    $subHeaderView.style.display="none";
    $listPositionView.style.display="none";
}

function closeModal(){
    $modal.classList.remove("opened")
    $subHeaderView.style.display="flex";
    $listPositionView.style.display="flex";
}