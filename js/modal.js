const modal = document.querySelector('.backdrop');
const openModal = document.querySelector(".order-button");
const closeModal = document.querySelector(".modal-btn-close");
const toggleModal = () => {
    modal.classList.toggle('is-hidden');
}

openModal.addEventListener('click', toggleModal);
closeModal.addEventListener('click', toggleModal);