const themeSwitch = document.getElementById('slider');

themeSwitch.addEventListener('change', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'dark')
    }

    addDarkClassToHTML()
});

function addDarkClassToHTML() {
    try {
        if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('html').classList.add('dark');
            

        } else {
            document.querySelector('html').classList.remove('dark')
        }
    } catch (error) {}
}
addDarkClassToHTML(); 