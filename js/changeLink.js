// callback function
// $('body').hide().fadeIn(3000, function() {alert("done")});

// how jquery events work
$('h1').click(function() {
    $(this).text("Hide the image.");
    $('img').hide();
    $('body').children('p').slideUp();
});

// experiment with jquery .each() function

// update the image link
$('img').each(function() {
    var imgPath = $(this).attr('src');
    var newPath = "img/" + imgPath;
    console.log(newPath);
    $(this).attr('src', newPath);
});


// update the anchor links -- make all links go to google
$('a').each(function() {
    var path = $(this).attr('href');
    var fixedPath = "https://www.google.com/";
    $(this).attr('href',fixedPath);
    $(this).css("font-size","1.25em");
    $(this).css("color","cyan");
});