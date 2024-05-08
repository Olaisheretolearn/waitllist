document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle between light and dark mode
    function toggleMode() {
        const lightMode = document.getElementById('light-mode');
        const darkMode = document.getElementById('dark-mode');

        lightMode.classList.toggle('hidden');
        darkMode.classList.toggle('hidden');
    }

    // Add click event listener to the light SVG
    document.getElementById('light-svg').addEventListener('click', toggleMode);

    // Add click event listener to the dark SVG
    document.getElementById('dark-svg').addEventListener('click', toggleMode);
    console.log("We out here");

    // Function to display the custom alert dialog
    function showAlert() {
        document.getElementById('custom-alert').style.display = 'block';
    }

    // Add event listener to the submit button of the first form
    document.getElementById('submit-1').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        const scriptURL = 'https://script.google.com/macros/s/AKfycbytzbivCx0YzEeSJIvFNoZRJYH9K7gEWmzDSFP1w7AgshVdSeKYKCrhZh2QFAB3pPvHRA/exec';
        const form = document.forms['email-form-1'];

        // Send form data using fetch
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            if (response.ok) {
                showAlert(); // Display the custom alert dialog
                window.location.reload(); // Reload the page
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error', error.message);
            document.getElementById('error-message').style.display = 'block'; // Display error message
        });
    });

    // Add event listener to the submit button of the second form
    document.getElementById('submit-2').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        const scriptURL = 'https://script.google.com/macros/s/AKfycbytzbivCx0YzEeSJIvFNoZRJYH9K7gEWmzDSFP1w7AgshVdSeKYKCrhZh2QFAB3pPvHRA/exec';
        const form = document.forms['email-form-2'];

        // Send form data using fetch
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            if (response.ok) {
                showAlert(); // Display the custom alert dialog
                window.location.reload(); // Reload the page
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error', error.message);
            document.getElementById('error-message').style.display = 'block'; // Display error message
        });
    });

    // Add event listener to the close button in the custom alert dialog
    document.getElementById('close-alert').addEventListener('click', function() {
        document.getElementById('custom-alert').style.display = 'none'; // Hide the custom alert dialog
    });
});
