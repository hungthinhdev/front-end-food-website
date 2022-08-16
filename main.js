const userBtn = document.getElementById('user-status-btn')
const profile = document.querySelector('.profile')
const product = document.querySelector('.product')
const viewProductBtn = document.querySelector('.view-product-btn')
const addToCartBtn = document.querySelector('.add-to-cart-btn')
const showNavBtn = document.querySelector('.show-nav-btn')
const navList = document.querySelector('.nav-list')

userBtn.addEventListener('click', (e) => {
  profile.classList.toggle('show-user-status')
})

showNavBtn.addEventListener('click', (e) => {
  navList.classList.toggle('showNavLink')
})