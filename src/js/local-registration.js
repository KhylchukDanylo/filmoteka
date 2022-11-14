import { refs } from './DOM-elements';
const {
  inputName: name,
  inputEmail: email,
  inputPassword: password,
  btnRegister,
} = refs;

btnRegister.addEventListener('click', createNewUser);

function createNewUser() {
  const newUser = {
  name: name.value,
  email: email.value,
  password: password.value,
  }
  const userToSave = JSON.stringify(newUser);
  if(localStorage.getItem('local-users')) {return}
  localStorage.setItem('local-users', userToSave);
}
