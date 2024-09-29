document.getElementById('discoToggle').addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('disco-mode');
    } else {
        document.body.classList.remove('disco-mode');
    }
});