document.addEventListener('DOMContentLoaded', () => {
    // 1. Event Handling
    const clickButton = document.getElementById('clickButton');
    const hoverTarget = document.getElementById('hoverTarget');
    const keypressInput = document.getElementById('keypressInput');
    const keypressOutput = document.getElementById('keypressOutput');
    const doubleClickBtn = document.getElementById('doubleClickBtn');

    clickButton.addEventListener('click', () => {
        alert('Button Clicked!');
    });

    hoverTarget.addEventListener('mouseover', () => {
        hoverTarget.textContent = 'You are hovering!';
    });

    hoverTarget.addEventListener('mouseout', () => {
        hoverTarget.textContent = 'Hover Over Me';
    });

    keypressInput.addEventListener('keypress', (event) => {
        keypressOutput.textContent = `You typed: ${event.key}`;
    });

    doubleClickBtn.addEventListener('dblclick', () => {
        alert('Secret Double Click Action!');
        doubleClickBtn.classList.toggle('secret-style'); // Bonus: Toggle a class
    });

    // 2. Interactive Elements
    const changeTextButton = document.getElementById('changeTextButton');
    const changingText = document.getElementById('changingText');
    let textChanged = false;

    changeTextButton.addEventListener('click', () => {
        changingText.textContent = textChanged ? 'Initial Text' : 'Text Changed!';
        textChanged = !textChanged;
    });

    const imageGallery = document.getElementById('imageGallery');
    const images = imageGallery.querySelectorAll('img');
    const prevButton = document.getElementById('prevImage');
    const nextButton = document.getElementById('nextImage');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('open');
        });
    });

    // 3. Form Validation
    const registrationForm = document.getElementById('registrationForm');
    const requiredField = document.getElementById('requiredField');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const formSubmitMessage = document.getElementById('formSubmitMessage');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    registrationForm.addEventListener('submit', (event) => {
        let isValid = true;

        if (!requiredField.value.trim()) {
            document.getElementById('requiredFieldError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('requiredFieldError').style.display = 'none';
        }

        if (emailField.value && !emailRegex.test(emailField.value)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('emailError').style.display = 'none';
        }

        if (passwordField.value.length < 8) {
            document.getElementById('passwordError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('passwordError').style.display = 'none';
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        } else {
            event.preventDefault(); // For demonstration, prevent actual submission
            formSubmitMessage.style.display = 'block';
            setTimeout(() => {
                formSubmitMessage.style.display = 'none';
                registrationForm.reset();
            }, 3000);
        }
    });

    // Bonus: Real-time feedback while typing (Form Validation)
    requiredField.addEventListener('input', () => {
        document.getElementById('requiredFieldError').style.display = requiredField.value.trim() ? 'none' : 'block';
    });

    emailField.addEventListener('input', () => {
        document.getElementById('emailError').style.display = emailRegex.test(emailField.value) || !emailField.value ? 'none' : 'block';
    });

    passwordField.addEventListener('input', () => {
        document.getElementById('passwordError').style.display = passwordField.value.length >= 8 || !passwordField.value ? 'none' : 'block';
    });
});