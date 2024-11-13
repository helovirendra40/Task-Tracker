$(document).ready(function() {

    $('.navbar-toggler').click(function(){
        $('#navbarSupportedContent').toggle('show')
    });



  var emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/; // 
  var phonePattern = /^[0-9]{10}$/; // validation Phone number

  // Email validation on input event
  $('#email').on('input', function() {
    var email = $(this).val().trim();
    if (emailPattern.test(email)) {
      $(this).next('.error-message').remove(); // Remove error message when email is valid
    }
  });

  // Phone validation on input event
  $('#phone').on('input', function() {
    var phone = $(this).val().trim();
    if (phonePattern.test(phone)) {
      $(this).next('.error-message').remove(); // Remove error message when phone is valid
    }
  });

  $('#subscribeForm').submit(function(event) {
    event.preventDefault(); // Prevent form submission
    var email = $('#email').val().trim();
    var phone = $('#phone').val().trim();
    var isValid = true;

    // Clear previous error messages
    $('.error-message').remove();

    // Validate email (check if filled and format is valid)
    if (email === '') {
      $('#email').after('<span class="error-message" style="color:red;">Email is required.</span>');
      isValid = false;
    } else if (!emailPattern.test(email)) {
      $('#email').after('<span class="error-message" style="color:red;">Enter a valid email.</span>');
      isValid = false;
    }

    // Validate phone (check if filled and contains exactly 10 digits)
    if (phone === '') {
      $('#phone').after('<span class="error-message" style="color:red;">Phone is required.</span>');
      isValid = false;
    } else if (!phonePattern.test(phone)) {
      $('#phone').after('<span class="error-message" style="color:red;">Enter a valid 10-digit phone number.</span>');
      isValid = false;
    }

    // If both fields are valid, proceed further
    if (isValid) {
      alert('Thanks for subscribe....');

      // Clear form fields
      $('#email').val('');
      $('#phone').val('');
    }
  });
});