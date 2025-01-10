document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const display = document.getElementById("display");
        const value = this.getAttribute('data-value');

        if (value === 'C') {
            display.value = '';
        } else if (value === 'backspace') {
            display.value = display.value.slice(0, -1);
        } else if (value === 'equals') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
                setTimeout(() => { display.value = ''; }, 1500); // Clear after showing error
            }
        } else {
            display.value += value; // Append the value to the display
        }
    });
});
