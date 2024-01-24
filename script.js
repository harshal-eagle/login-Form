document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector('.wrapper');
    const loginBox = document.querySelector('.login-box');
    const regBox = document.querySelector('.Reg-box');
    const loginLink = document.querySelector('.Loginlink');
    const regLink = document.querySelector('.reglink');
    const closeBtn = document.querySelector('.close');
    const loginBtn = document.querySelector('.btn_login');
    
    function showLoginBox() {
    wrapper.style.height = '400px';
    loginBox.style.transform = 'translateX(0px)';
    regBox.style.transform = 'translateX(400px)';
    }
    
    function showRegBox() {
    wrapper.style.height = '570px';
    regBox.style.transform = 'translateX(0px)';
    loginBox.style.transform = 'translateX(-400px)';
    }
    
    function closeBoxes() {
    wrapper.style.height = '0px';
    loginBox.style.transform = 'translateX(0px)';
    regBox.style.transform = 'translateX(0px)';
    }
    

    loginLink.addEventListener('click', showRegBox);
    regLink.addEventListener('click', showRegBox);
    closeBtn.addEventListener('click', closeBoxes);
    loginBtn.addEventListener('click', showLoginBox);
    regLink.addEventListener('click', showLoginBox);
  
    
    wrapper.style.height = '0px';
    loginBox.style.transform = 'translateX(400px)';
    regBox.style.transform = 'translateX(400px)';
    });