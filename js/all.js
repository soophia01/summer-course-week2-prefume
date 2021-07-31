$(document).ready(function () {
    $('.hamburger').click(function (e) { 
        e.preventDefault();
        $('.rwd-menu').slideToggle(100);
    });
});