import { refs } from "./DOM-elements";
const {formAuth: form, inputName:name, inputEmail:email, inputPassword:password, btnRegister, modalAuthBackdrop:bacdrop} = refs;

btnRegister.addEventListener('click', createNewUser);

const users = JSON.parse( localStorage.getItem('local-users')) || [];
console.log(users);
function createNewUser(){
    const newUser = {};
    newUser.id += 1;
    newUser.name = name.value;
    newUser.email = email.value;
    newUser.password = password.value;
    users.push(newUser);
   
    const newUsersArray =  JSON.stringify(users);
    localStorage.removeItem('local-users');
    localStorage.setItem('local-users', newUsersArray);
    bacdrop.classList.add('visually-hidden');
}


// в файле modalAuth нужно закоментировать строку ниже
// refs.btnRegister.addEventListener('click', onBtnSubmit);