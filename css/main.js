var modalElement = document.querySelector('.modal'),
	loginElement = document.querySelector('.login-form'),
	btnLoginElement = document.querySelector('.btn-login'),
	modalBodyElement = document.querySelector('.modal__body'),
	registerElement = document.querySelector('.register-form'),
	btnRegisterElement = document.querySelector('.btn-register'),
	modalOverlayElement = document.querySelector('.modal__overlay'),
	outElement = document.querySelectorAll('.header__navbar-user-menu li')[3],
	btnBackAuthformElements = document.querySelectorAll('.auth-form__controls-back');


outElement.addEventListener('click', function(){
	modalElement.classList.add('show-modal');
	loginElement.classList.add('show-login');
})

modalOverlayElement.onclick = function(){
	modalElement.classList.remove('show-modal');
	loginElement.classList.remove('show-login');
	registerElement.classList.remove('show-register');
}

btnRegisterElement.onclick = function(){
	loginElement.classList.remove('show-login');
	registerElement.classList.add('show-register');
}

btnLoginElement.onclick = function(){
	loginElement.classList.add('show-login');
	registerElement.classList.remove('show-register');
}


btnBackAuthformElements.forEach(function(btnBackAuthformElement) {
	btnBackAuthformElement.addEventListener('click', function(){
	modalElement.classList.remove('show-modal');
	loginElement.classList.remove('show-login');
	registerElement.classList.remove('show-register');
})
})
