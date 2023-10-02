const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('.login-form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();

    const { email, password } = evt.currentTarget.elements;
    if (email.value.trim() === '' || password.value.trim() === '') { // додав метод трім та строге порівняння
        alert('Всі поля повинні бути заповнені');   
        return; // додав rerurn для раннього повернення
    } 

    const data = {
        email: email.value,
        password: password.value
    }
    console.log(data);
    evt.currentTarget.reset();
    
}
