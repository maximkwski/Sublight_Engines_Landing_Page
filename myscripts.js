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

pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 

form.addEventListener('submit', (e) => { 
    let messages = []
    // if (nname.value === '' || nname.value == null) {
        //     messages.push("Name is required")
        // }
        // if (nname.value.length < 3 && nname.value.length >= 1) {
            //     messages.push('Name is too short')
            // }
            
    
    if (/^\S+@\S+\.\S+$/.test(email.value) === false) {
        messages.push('Please enter a valid email pleaaseeee')
    }


    let validPhone = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    
    if (/[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(phone.value) === false) {
        messages.push("Enter a phone number in a valid format")
    }
    // if (lang.value === '') {
    //     messages.push ("Please select a language.")
    // }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
        // return false;
    }
}) 
