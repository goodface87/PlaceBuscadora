$(document).ready(function () {
    $('.search-container input').keyup(function () {
        //$('.result').css("margin-top", "300px");
        
        $('.result').removeClass('result').addClass('result-found');
    });
});