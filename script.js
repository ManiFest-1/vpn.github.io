// Открытие/закрытие FAQ
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

 // Получаем элементы
 const profileButton = document.querySelector('.profile-cta'); // Кнопка "Профиль"
 const sidebar = document.getElementById('sidebar'); // Боковая панель
 const closeSidebar = document.getElementById('closeSidebar'); // Кнопка закрытия
 
 // Открываем панель при нажатии на кнопку "Профиль"
 profileButton.addEventListener('click', (e) => {
     e.preventDefault(); // Отменяем переход по ссылке
     sidebar.classList.add('active');
     
 });
 
 // Закрываем панель при нажатии на кнопку закрытия
 closeSidebar.addEventListener('click', () => {
     sidebar.classList.remove('active');
 });
 
 // Закрываем панель при клике вне её области
 document.addEventListener('click', (event) => {
     if (!sidebar.contains(event.target) && event.target !== profileButton) {
         sidebar.classList.remove('active');
     }
 });
 
 
