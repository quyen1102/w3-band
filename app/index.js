const btnBuys = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.modal')
const btnCloseTicket = document.querySelector('.modal-close')
const modalContainer = document.querySelector('.js-modal-container')

btnBuys.forEach(buy => {
    buy.addEventListener('click', () =>{
       modal.classList.add('open')
        
    })
});

btnCloseTicket.onclick = () => {
    modal.classList.remove('open')
}
modal.addEventListener('click', () => {
    modal.classList.remove('open')
})

modalContainer.addEventListener('click', (e) => {
    e.stopPropagation()
})