import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js";

const singupForm = document.querySelector('#signup-form')

singupForm.addEventListener( 'submit', async (e) =>{
  e.preventDefault()

  const email = singupForm['signup-email'].value
  const password = singupForm['signup-password'].value

  try{
      const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
      console.log(userCredentials)

      const signupModal = document.querySelector('#signupModal')
      const modal = bootstrap.Modal.getInstance(signupModal)
      modal.hide()
      
      showMessage( 'Welcome ' + userCredentials.user.email, 'success' )


  }catch( error ){
    console.log( error);
    if(error.code === 'auth/invalid-email'){
      
      showMessage('Invalid email', 'red')
    }
    else if(error.code === 'auth/weak-password'){
      showMessage('Invalid password', 'red')

    }
    else if(error.code === 'auth/email-already-in-use'){
      showMessage('Email already in use', 'red')
    }
    else {
      showMessage('somethig went wrong', 'red')
    }

  }


} )