const form = document.querySelector(".form");
const firstName = document.querySelector(".fname");
const lastName = document.querySelector(".lname");
const fullName = document.querySelector(".fullname");
const email = document.querySelector(".email");
const pass = document.querySelector(".pass");
const passRe = document.querySelector(".passRe");
const phoneNo = document.querySelector(".phone");
const errorFname = document.querySelector(".error-fname");
const errorLname = document.querySelector(".error-lname");
const errorFullName = document.querySelector(".error-fullname");
const errorPhone = document.querySelector(".error-phone");
const errorEmail = document.querySelector(".error-email");
const errorPass = document.querySelector(".error-pass");
const errorPassRe = document.querySelector(".error-passRe");

form.addEventListener("submit", function (event) {
  // console.log('FirstName: ', firstName.value);
  // console.log('LastName: ', lastName.value);
  // console.log('FullName: ', fullName.value);
  // console.log('Email: ', email.value);
  // console.log('PhoneNo: ', phoneNo.value);
  event.preventDefault();

  if (firstName.value === "") {
    errorFname.innerHTML = "Enter Your first name";
  } else {
    errorFname.innerHTML = "";
  }

  if (lastName.value === "") {
    errorLname.innerHTML = "Enter Your last name";
  } else {
    errorLname.innerHTML = "";
  }

  if (fullName.value === "") {
    errorFullName.innerHTML = "Enter your fullname";
  } else {
    errorFullName.innerHTML = "";
  }

  if (phoneNo.value === "") {
    errorPhone.innerHTML = "Enter Your phoneNo";
  } else if (phoneNo.value.length !== 10) {
    errorPhone.innerHTML = "Phone No Should be 10 digits";
    errorPhone.style.marginLeft = "30px";
  } else if (phoneNo.value < 0) {
    errorPhone.innerHTML = "Please enter a valid phone No";
  } else {
    errorPhone.innerHTML = "";
  }

  let emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let result = emailValidation.test(email.value);
  if (email.value === "") {
    errorEmail.innerHTML = "Enter Your email Address";
  } else if (result === false) {
    errorEmail.innerHTML = "Enter a valid email";
    errorEmail.innerHTML.style.marginLeft = "20px";
  } else {
    errorEmail.innerHTML = "";
  }

  let passRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/;
  if (pass.value === "" || passRe.value === "") {
    errorPass.innerHTML = "Enter Your PassWord";
  } else if (pass.value.length !== passRe.value.length) {
    errorPassRe.innerHTML = "Password does not match";
  } else if (pass.value.length === passRe.value.length) {
    if (passRegex.test(pass.value)) {
      errorPass.innerHTML = "";
    } else {
      errorPass.innerHTML = `password is not perfect, use 6+ characters <br>upper 
            lower including special character`;
      errorPass.style.marginLeft = "76px";
    }
  } else {
    errorPass.innerHTML = "";
  }
});
