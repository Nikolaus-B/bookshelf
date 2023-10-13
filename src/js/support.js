const logoModuleFunction = {
  onDOMContentLoaded: function () {
    const logoList = document.getElementById('logoList');
    const logoButton = document.getElementById('toggleLogo');
    const logos = logoList.querySelectorAll('.support-item');
    let changeLogos = false;

    logoButton.addEventListener('click', toggleLogos);

    function toggleLogos() {
      changeLogos = !changeLogos;

      const btnIcon = document.querySelector('.btn-icon');
      btnIcon.classList.toggle('rotate-180', changeLogos);

      for (let i = 0; i < 6; i++) {
        //   console.log(i);
        if (logos[i] && logos[i + 6]) {
          if (changeLogos) {
            logos[i].classList.add('hidden');
            logos[i + 6].classList.remove('hidden');
          } else {
            logos[i].classList.remove('hidden');
            logos[i + 6].classList.add('hidden');
          }
        }
      }
    }

    for (let i = 6; i < logos.length; i++) {
      logos[i].classList.add('hidden');
    }
  },
};

export default logoModuleFunction;
