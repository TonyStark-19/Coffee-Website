// JavaScript to toggle the menu

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.navigation');
    const menuBtn = document.querySelector('.menu-btn');
    const menuBtn2 = document.querySelector('.menu-btn-2');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn.classList.add('hidden'); // Hide menu button
        menuBtn2.classList.remove('hidden'); // Show close button
    });

    menuBtn2.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn2.classList.add('hidden'); // Hide close button
        menuBtn.classList.remove('hidden'); // Show menu button
    });
});