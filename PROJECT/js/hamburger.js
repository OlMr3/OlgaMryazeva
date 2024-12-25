const hamburger = document.getElementById('hamburger');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.querySelector('.bg-overlay'); // Добавление фона
        
        // Обработчик клика на гамбургер
        hamburger.addEventListener('click', () => {
            // Переключаем классы open и cross
            sidebar.classList.toggle('open');
            hamburger.classList.toggle('cross');
            overlay.classList.toggle('open'); // Управление фоном
        });