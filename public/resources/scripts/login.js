$(document).ready(function () {

    var usernameError = true,
        emailError = true,
        passwordError = true,
        passConfirm = true;
	
	// Email Regex Pattern
	const regex = new RegExp('.+@.+\..+');

    // Label effect
    $('input').focus(function () {

        $(this).siblings('label').addClass('active');
    });

    //Backlight effect
    $('h3').click(function () {
        $('#backlightBox').toggleClass('backlight');
    });

    // Form validation
    $('input').blur(function () {

        // User Name
        if ($(this).hasClass('username-reg')) {
            if ($(this).val().length === 0) {
                setErrorClass($(this), "Name darf nicht leer sein");
                usernameError = true;
            } else if ($(this).val().length > 0 && $(this).val().length < 6) {
                setErrorClass($(this), "Mindestlänge 6 Zeichen");
                usernameError = true;
            } else {
                setSuccessClass($(this));
                console.log($(this).val())
                console.log(Number.isInteger($(this).val()))
                usernameError = false;
            }
        }
        // Email
        if ($(this).hasClass('email-reg')) {
            if ($(this).val().length == '') {
                setErrorClass($(this), "Email darf nicht leer sein");
                emailError = true;
            } else if (!regex.test($(this).val())) {
                setErrorClass($(this), "Keine gültige Email");
                emailError = true;
			} else {
                setSuccessClass($(this));
                emailError = false;
            }
        }

        // PassWord
        if ($(this).hasClass('pass')) {
            if ($(this).val().length < 8) {
                setErrorClass($(this), "Mindestlänge 8 Zeichen");
                passwordError = true;
            } else {
                setSuccessClass($(this));
                passwordError = false;
            }
        }

        // PassWord confirmation
        if ($('.password-reg').val() !== $('.password-reg-conf').val()) {
            setErrorClass($('.passConfirm'), "Passwörter stimmen nicht überein");
            passConfirm = false;
        } else if ($('.password-reg').val() == $('.password-reg-conf').val() && $('.password-reg-conf').val().length >= 8) {
            setSuccessClass($('.passConfirm'));
            passConfirm = false;
        }

        // label effect
        if ($(this).val().length > 0) {
            $(this).siblings('label').addClass('active');
        } else {
            $(this).siblings('label').removeClass('active');
        }
    });


    // form switch
    $('a.switch').click(function (e) {
        $(this).toggleClass('active');
        e.preventDefault();

        if ($('a.switch').hasClass('active')) {
            $(this).parents('.form-piece').addClass('switched').siblings('.form-piece').removeClass('switched');
        } else {
            $(this).parents('.form-piece').removeClass('switched').siblings('.form-piece').addClass('switched');
        }
    });


    // Form submit
    $('form.signup-form').submit(function (event) {
        if (usernameError == true || emailError == true || passwordError == true || passConfirm == true) {
            $('.name, .email, .pass, .passConfirm').blur();
			event.preventDefault();
        } else {
            $('.signup, .login').addClass('switched');

            setTimeout(function () { $('.signup, .login').hide(); }, 700);
            setTimeout(function () { $('.brand').addClass('active'); }, 300);
            setTimeout(function () { $('.heading').addClass('active'); }, 600);
            setTimeout(function () { $('.form').hide(); }, 700);
        }
    });

    // Reload page
    $('a.profile').on('click', function () {
        location.reload(true);
    });

    // Set Success Class
    function setSuccessClass(e) {
        e.siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        e.parent('.form-group').addClass('hasSuccess');
    }

    // Set Error Class
    function setErrorClass(e, f) {
        e.siblings('span.error').text(f).fadeIn().parent('.form-group').addClass('hasError');
        e.parent('.form-group').removeClass('hasSuccess');
    }

});