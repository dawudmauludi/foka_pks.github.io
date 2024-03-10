window.onscroll = () => {
    let header = document.querySelector('.navbar');
    
    header.classList.toggle('stiky', window.scrollY > 100);
    }