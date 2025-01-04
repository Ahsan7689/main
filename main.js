
// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// feedback pop up
   // Check if user has scrolled to the bottom of the page
   window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // Show feedback popup if not previously submitted or closed
      if (!localStorage.getItem('feedbackSubmitted') && !localStorage.getItem('feedbackClosed')) {
        document.getElementById('feedback-popup').style.display = 'block';
        document.body.classList.add('blur'); // Blur background
      }
    }
  });

//============================
    // Contact-Us page
//============================    

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
  var firstName = document.getElementById('firstName').value.trim();
  var lastName = document.getElementById('lastName').value.trim();
  var email = document.getElementById('email').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var message = document.getElementById('message').value.trim();
  var firstNameError = document.getElementById('firstNameError');
  var lastNameError = document.getElementById('lastNameError');
  var emailError = document.getElementById('emailError');
  var phoneError = document.getElementById('phoneError');
  var messageError = document.getElementById('messageError');
  var valid = true;

  // Reset previous errors
  firstNameError.innerHTML = '';
  lastNameError.innerHTML = '';
  emailError.innerHTML = '';
  phoneError.innerHTML = '';
  messageError.innerHTML = '';

  // Validate First Name
  if (!/^[a-zA-Z]+$/.test(firstName)) {
    firstNameError.innerHTML = 'First Name must contain only alphabets';
    valid = false;
}

  // Validate Last Name
  if (!/^[a-zA-Z]+$/.test(lastName)) {
    lastNameError.innerHTML = 'Last Name must contain only alphabets';
    valid = false;
}

  // Validate Email
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.innerHTML = 'Invalid Email format';
    valid = false;
  }

  // Validate Phone Number
  if (!/^\d{10}$/.test(phone)) {
    phoneError.innerHTML = 'Phone Number must be 10 digits';
    valid = false;
  }

  // Validate Message
  if (message === '') {
    messageError.innerHTML = 'Message is required';
    valid = false;
  }

  if (!valid) {
    event.preventDefault(); // Prevent form submission if there are errors
  }
});


