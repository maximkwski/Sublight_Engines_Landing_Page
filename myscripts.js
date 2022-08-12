/*======================= burger menu ===================*/
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar_links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

/*================== form validation =================*/
const form =  document.getElementById('form')
const nname = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const lang = document.getElementById('lang')
const errorElement = document.getElementById('error')



form.addEventListener('submit', (e) => { 
    let messages = []
    let validName =  /^\w[a-zA-Z]+\s+\w[a-zA-Z]*$/
    if (nname.value === '' || nname.value == null) {
            messages.push("Name is required")
        }
    if (validName.test(nname.value) === false) {
         messages.push('Please enter your full name')
        }
            
    let validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    if (validEmail.test(email.value) === false) {
        messages.push('Please enter a valid email')
    }

    let validPhone = /\d{3}[ -]?\d{3}[ -]?\d{4}/;
    if (validPhone.test(phone.value) === false) {
        messages.push("Enter a phone number in a valid format")
    }
    if (lang.value === '') {
        messages.push ("Please select a language.")
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    else {
        sendEmail()
        myAlert()
        return false;
    }
}) 

function myAlert() {
    alert("Your form has been submitted!");
  }

 /*==================EMAIL JS======================*/
 function sendEmail() {
     const params = {
         from_name: document.getElementById("name").value,
         email_id: document.getElementById("email").value,
         phone: document.getElementById("phone").value,
         lang: document.getElementById("lang").value
     }
     
    emailjs.send("service_mqgx9k6", "template_od3xw0l", params).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
 }