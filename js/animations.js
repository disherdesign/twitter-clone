$(document).ready(function(){
	$(".tweet-compose").attr('maxlength','280');

$('.tweet-compose').on('load', function () {
    $('#tweet-controls').fadeToggle('fast', 'linear');
	});

$('.tweet-actions').on('load', function () {
    $(this).fadeOut('fast', 'linear');
	});

// $('.tweet-compose.dashboard').on('focus', function () {
//     $('#tweet-controls').fadeIn('fast', 'linear');
// 	});

// $('.tweet-compose.dashboard').on('blur', function () {
//     $('#tweet-controls').fadeOut('fast', 'linear');
// 	});



$('.tweet-compose').on('keyup keydown keypress', function() {
	var len = $(this).val().length
	var max = 140;
	$('#char-count p').text(max-len);
		if (len === 0) {
			$('#tweet-controls').fadeOut(125, 'linear');
		}
		else {
			$('#tweet-controls').fadeIn(125, 'linear');
		}
		if (max-len <= 10) {
			$('#char-count p').css("color", "#e00")
		}
		else {
			$('#char-count p').css("color", "")
		}

		if (len > 140) {
			$('#tweet-controls button').prop("disabled",true)
		}
		else {$('#tweet-controls button').prop("disabled",false)}
	});

//textbox grow on focus
$('.tweet-compose').on('focus', function () {
	    $(this).height('200%');
	});
//textbox shrink on unfocus
$('.tweet-compose').on('blur', function () {
	    $(this).height('');
	});

});

$('#tweet-submit').on('click', function () {
	$('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">Drew Disher</strong><span class="username"> @disherdesign</span>' + 
	'<p class="tweet-text">' +
	$('.tweet-compose').val() +
	'</p>' +
	'<div class="tweet-actions"><ul class="tweet-actions">'+
	'<li class="tweet-actions"><span class="icon action-reply"></span> Reply</li>' +
	'<li class="tweet-actions"><span class="icon action-retweet"></span> Retweet</li>' +
	'<li class="tweet-actions"><span class="icon action-favorite"></span> Favorite</li>' +
	'<li class="tweet-actions"><span class="icon action-more"></span>  More</li>'+ 
	'</ul></div>' +
	'<div class="stats"><div class="retweets">' +
	'<p class="num-retweets">' + 
	'0' + 
	'</p>' +
	'<p>RETWEETS</p></div>' +
	'<div class="favorites"><p class="num-favorites">'+
	'0'+
	'</p>' +
	'<p>FAVORITES</p></div>' +
	'<div class="users-interact"><div>' +
	'</div></div><div class="time">'+
	Date() +
	'</div></div>' +
	'<div class="reply"><img class="avatar" src="img/alagoon.jpg" />' +
	'<textarea class="tweet-compose" placeholder="Reply to ' +
	'@disherdesign"/>' +
	'</textarea></div></div></div><!-- .tweet -->' )
});

$('.tweet').on('mouseOver', function () {
	$('.tweet-actions').fadeIn('fast', 'linear');
})


