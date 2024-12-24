
        document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('#header');
    const imageUrl = 'url("../PROJECT/images/footer_bg.jpg")'; // Замените "your-image.jpg" на путь к вашему изображению

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > 0) {
            header.style.backgroundImage = imageUrl;
        } else {
            header.style.backgroundImage = '';
        }
    });
});
   