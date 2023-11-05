const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.modal__close-btn')
btn.addEventListener('click' , () => {
  modal.classList.add('modal--open') 
})
modal.addEventListener('click' , (event) => {
  const target = event.target
  if (target.tagName !== 'modal__window') {
      target.classList.remove('modal--open')
  }
})
btnClose.addEventListener('click', () => {
  modal.classList.remove('modal--open')
})