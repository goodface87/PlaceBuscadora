$(document).ready(function () {
    $('.search-container input').keyup(function () {
        //$('.result').css("margin-top", "300px");

        var showResult = function ($result) {
            $result.removeClass('result').addClass('result-found');
        };

        $('.result').each(function(index, element) {
            setTimeout(function() {
                showResult($(element));
            }, 3000);
        });
    });
});