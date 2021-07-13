const form = document.getElementById('form-email');
form.addEventListener('submit', e => {
  e.preventDefault();

  const email = form['email'];
  const emailValue = email.value;
  const formControl = email.parentNode;
  const small = formControl.querySelector('small');
  if (!emailValue) {

		email.classList.add('error');
		small.innerText = 'Email field cannot be blank!';
		small.style.display = 'inline-block';
	} else if (!isValidEmail(emailValue)) {

		email.classList.add('error');
		small.innerText = 'Email is invalid!';
		small.style.display = 'inline-block';
	} else {

		email.classList.remove('error');
		small.innerText = '';
		small.style.display = 'none';
	}

})


function isValidEmail(email) {
	var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return pattern.test(String(email).toLowerCase());
}
