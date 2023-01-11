import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'


const signInForm = document.querySelector('#login-form');


signInForm.addEventListener( 'submit', async e => {
  e.preventDefault();
  const email = signInForm['login-email'].value;
  const password = signInForm['login-password'].value;

  try{

    const credentials = await signInWithEmailAndPassword( auth, email, password );
    console.log( credentials );


    const modal = bootstrap.Modal.getInstance( document.querySelector('#signinModal'))
    modal.hide()

    showMessage( 'Welcome ' + credentials.user.email, 'success' )

  }catch( error ){
  
    console.log( error);
    if(error.code === 'auth/wrong-password'){
      
      showMessage('Wrong password ', 'red')
    }
    else if(error.code === 'auth/user-not-found'){
      showMessage('There is not user', 'red')
    }
    else {
      showMessage('somethig went wrong', 'red')
    }

  
  }
})