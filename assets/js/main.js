/* MENU ELEMENTS AND LISTENERS */
const classesToToggle = ["scale-y-0", "scale-y-1"];

let mobileMenu = document.getElementById('mobileMenu');
let openMobileMenuBtn = document.getElementById('openMobileMenuBtn');
let closeMobileMenuBtn = document.getElementById('closeMobileMenuBtn');

openMobileMenuBtn.addEventListener("click", () => {
	classesToToggle.forEach((ctt) => {
		mobileMenu.classList.toggle(ctt);
	});
});

closeMobileMenuBtn.addEventListener("click", () => {
	classesToToggle.forEach((ctt) => {
		mobileMenu.classList.toggle(ctt);
	});
});

function closeMobileMenu() {
	classesToToggle.forEach((ctt) => {
		mobileMenu.classList.toggle(ctt);
	});
}
