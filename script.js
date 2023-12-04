const form = document.querySelector('.form');
const firstName = document.querySelector('.fname');
const lastName = document.querySelector(".lname");
const email = document.querySelector('.email');
const phoneNo = document.querySelector('.phone');

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('FirstName: ', firstName.value);
    console.log('LastName: ', lastName.value);
    console.log('Email: ', email.value);
    console.log('PhoneNo: ', phoneNo.value);
})