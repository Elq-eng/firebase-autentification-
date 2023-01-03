import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "./firebase.js"

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

  }catch( error ){
    console.log( error);
  }


} )