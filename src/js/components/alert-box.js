let close = document.querySelectorAll('[alert-box] [close]');
close.addEventListener('click', () => {
    let alertBox = document.querySelectorAll('[alert-box]');
    alertBox.style.display = 'none';
}, false);
