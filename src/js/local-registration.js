import { refs } from './DOM-elements';
const {
  formAuth: form,
  inputName: name,
  inputEmail: email,
  inputPassword: password,
  btnRegister,
} = refs;

btnRegister.addEventListener('click', createNewUser);

let users = JSON.parse(localStorage.getItem('local-users')) || [];
console.log(users);
function createNewUser() {
  const newUser = {};
  newUser.name = name.value;
  newUser.email = email.value;
  newUser.password = password.value;
  users.push(newUser);

  const newUsersArray = JSON.stringify(newUser);
  localStorage.removeItem('local-users');
  localStorage.setItem('local-users', newUsersArray);
}
