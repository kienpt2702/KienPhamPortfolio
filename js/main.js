$(window).on("load", fadeOut(".loader-wrapper"));

$(document).ready(function () {
    $('.accordion-header').click(updateDropdown);

    $('#aboutButton').click(show);
});

function updateDropdown() {
    const icon = $(this).find('i');

    if (icon.hasClass('fa-angle-down')) {
        icon.removeClass('fa-angle-down');
        icon.addClass('fa-angle-up');
    } else if (icon.hasClass('fa-angle-up')) {
        icon.removeClass('fa-angle-up');
        icon.addClass('fa-angle-down');
    }
}

function show() {
    $($(this).data("target")).fadeIn('slow');
}

function fadeOut(data) {
    return function () {
        $(data).fadeOut("slow");
    }
}