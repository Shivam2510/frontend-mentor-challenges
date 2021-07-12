const form = document.getElementById('form');
form.addEventListener('submit',event => {
  event.preventDefault();
  const firstName = form['firstname'].value;
  const lastName = form['lastname'].value;
	const email = form['email'].value;
	const password = form['password'].value;

// First Name Validation.
  if(firstName == ""){
    const formMsg = form['firstname'].parentNode;
    formMsg.classList.add('error');
    const small = formMsg.querySelector('small');
    small.innerHTML="First Name Must Required";
  }
  else{
    const formMsg = form['firstname'].parentNode;
    formMsg.classList.remove('error');
  }

  // Last Name Validation.
    if(lastName == ""){
      const formMsg = form['lastname'].parentNode;
      formMsg.classList.add('error');
      const small = formMsg.querySelector('small');
      small.innerHTML="Last Name Must Required";
    }
    else{
      const formMsg = form['lastname'].parentNode;
      formMsg.classList.remove('error');
    }

    // Email Validation.
      if(email == ""){
        const formMsg = form['email'].parentNode;
        formMsg.classList.add('error');
        const small = formMsg.querySelector('small');
        small.innerHTML="Email Must Required";
      }
      else if (!isValid(email)) {
        const formMsg = form['email'].parentNode;
        formMsg.classList.add('error');
        const small = formMsg.querySelector('small');
        small.innerHTML="Email is not Valid";
      }
      else{
        const formMsg = form['email'].parentNode;
        formMsg.classList.remove('error');
      }

      // Password Validation.
        if(password == ""){
          const formMsg = form['password'].parentNode;
          formMsg.classList.add('error');
          const small = formMsg.querySelector('small');
          small.innerHTML="Password Must Required";
        }
        else{
          const formMsg = form['password'].parentNode;
          formMsg.classList.remove('error');
        }
})

// EMail function for Pattern
function isValid(email) {
	var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return pattern.test(String(email).toLowerCase());
}
