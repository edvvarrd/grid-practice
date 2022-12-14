const navMobile = document.querySelector('.nav-mobile')
const navLink = document.querySelectorAll('.nav__link')
const navButton = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navButton.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
	navLink.forEach(item => {
		item.addEventListener('click', () => {
			navButton.classList.remove('is-active')
			navMobile.classList.remove('nav-mobile--active')
		})
	})
}
navButton.addEventListener('click', handleNav)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
