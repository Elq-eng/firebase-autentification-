import { signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
const logout = document.querySelector( '#logout' );
import { auth } from "./firebase.js"


logout.addEventListener( 'click', async () => {
  console.log( 'logout' );
  await signOut( auth )
  console.log( 'signOut ')
})