
const loginOutLinks = document.querySelectorAll('.logged-out')
const loginInlinks = document.querySelectorAll('.logged-in')
export const loginCheck = user => {

  if( user ){
    loginOutLinks.forEach( link => link.style.display = 'none');
    loginInlinks.forEach( link => link.style.display = 'block');
  } else {

    loginOutLinks.forEach( link => link.style.display = 'block');
    loginInlinks.forEach( link => link.style.display = 'none');
  }

}