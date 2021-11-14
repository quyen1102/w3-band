
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnBuys = $$('.js-buy-ticket')
const modal = $('.modal')
const btnCloseTicket = $('.modal-close')
const modalContainer = $('.js-modal-container')
const btnMobileMenu = $('.mobile-menu-btn')
const header = $('#header')
const headerHeight = header.clientHeight
const menuItems = $$('#nav li a[href*="#"]')

// console.log(menuItems)

// Buy ticket 
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

// Mobile-menu
btnMobileMenu.addEventListener('click', () => {
    let isClose = header.clientHeight === headerHeight
   

    if(isClose){
            header.style.height = 'auto'
    }else{
            header.style.height = null
    }
})
menuItems.forEach(item => {
    item.onclick = () => {
        header.style.height = null
    }
});