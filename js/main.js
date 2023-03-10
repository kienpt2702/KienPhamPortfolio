$(window).on("load", fadeOut(".loader-wrapper"));

$(document).ready(function () {
    $('.accordion-header').click(updateDropdown);

    $('#aboutButton').click(show);

    $('#reset').click(function () {
        $(this).find('form').find("input[type=text], textarea").val("");
    });
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

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    q: 'music',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': 'f163bafa66mshacbf4644bba1e4dp11d3f7jsnc451fd307333',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});