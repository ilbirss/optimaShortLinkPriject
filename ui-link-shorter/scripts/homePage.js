const $modal = document.getElementById("modal");
const $subHeaderView = document.getElementById("sub");
const $listPositionView = document.getElementById("listPosition");
const $btnModal = document.getElementById("btn-Modal");
const $linkName = document.getElementById("linkName");
const $originLink = document.getElementById("originLink");
const $btnCreateLink = document.getElementById("btnCreateLink");
const $modalText = document.getElementById("modal__text");
const $followLink = document.getElementById('followLink');

$btnModal.addEventListener("click", openModal);

function openModal() {
    $modal.classList.add("opened");
    $subHeaderView.style.visibility = "hidden";
    $listPositionView.style.visibility = "hidden";
    $modalText.style.visibility = "hidden";
}

function closeModal() {
    $modal.classList.remove("opened")
    $subHeaderView.style.visibility = "visible";
    $listPositionView.style.visibility = "visible";
}

$btnCreateLink.addEventListener('click', createLink);

async function createLink(event) {
    event.preventDefault();
    if(!$linkName.value) {
        console.log('Incorrect linkName');
        return;
    }
    if(!isValidLink($originLink.value)) {
        console.log('Incorrect originLink');
        return;
    }
    const data = await request('ls', 'POST', {name: $linkName.value, link: $originLink.value});
    console.log(data);
    if (data) {
        $modalText.style.visibility = "visible";
        $followLink.setAttribute('href', data.originalLink);
    }
    if($linkName.value && $originLink.value) {
        setTimeout(function renderLinks(){
            window.location.reload(1);
        }, 0);
    }
}

async function deleteListElement(shortId) {
    await request('ls/delete', "DELETE",{linkId: shortId})
    document.getElementById(shortId).style.display = 'none';
}

const $linksContainer = document.getElementById('list');
async function renderLinks() {
    const links = await request('ls');
    $linksContainer.innerHTML = links.map(fromJsonToHtml).join('');
}
renderLinks();

function fromJsonToHtml(link) {
    return `
  <div class="list__flexPosition" id=${link.shortId}>
     <ul class="list__action ">
        <li>
            Название ссылки: ${link.linkName}</br>
            Оригинальная ссылка: <a href="${link.originalLink}">здесь</a></br>
            Сокращенная ссылка: <a href="${link.shortLink}">здесь</a></br>
            Количество переходов: ${link.requestedTimes} </br>
            Дата создания: ${link.createdAt} </br>
            Укороченный ID: ${link.shortId} </br>
            Номер пользователя: ${link.userId} </br>
        </li>
     </ul>
      <div class="list__buttonAction">
         <a href="${link.shortLink}" class="list__buttonBlue">Перейти</a>
         <input id="delete" onclick="deleteListElement('${link.shortId}')" class="list__buttonRed" type="submit" value="Удалить">
      </div>
  </div>
    `;
}

function logOut(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    alert("You're logout now");
    window.location.href= '../index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    if (!hasToken()) {
        location.href = '../index.html'
    }
});

