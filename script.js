const form = document.querySelector('.form');
const firstName = document.querySelector('.fname');
const lastName = document.querySelector(".lname");
const fullName = document.querySelector(".fullname")
const email = document.querySelector('.email');
const phoneNo = document.querySelector('.phone');
const error = document.querySelectorAll(".error");
const input = document.querySelectorAll('input');

form.addEventListener('submit', function(event){
    
    console.log('FirstName: ', firstName.value);
    console.log('LastName: ', lastName.value);
    console.log('FullName: ', fullName.value);
    console.log('Email: ', email.value);
    console.log('PhoneNo: ', phoneNo.value);
    event.preventDefault();
    
});


