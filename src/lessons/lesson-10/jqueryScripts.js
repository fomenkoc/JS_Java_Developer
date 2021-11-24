$(document).ready(function() {
	$('div#selectors p').css('color', 'green');
	$('h4').css('background-color', 'yellow');
	
	$('div#attributes #pHero').bind('click', function() {
		var heroNameAttr= $('div#attributes #pHero').attr('title');
		$('div#attributes #heroName').text(heroNameAttr);
		$('div#attributes #pHero').hide();	
	});
	
	$('div#attributes #heroName').bind('click', function() {
		$('div#attributes #heroName').addClass('selected');
	});
	
	$('div#attributes #heroName').bind('click', function() {
		$('div#attributes #heroName').addClass('selected');
	});
	
	$('#ajaxPost').bind('click', function() {
		$.ajax({
			type:  'POST',
			data:  JSON.stringify({test:'test'}),
			contentType: 'application/json',
			url: 'http://localhost:3001/userPost',
			success: function(data) {
				console.log('success');
				console.log(JSON.stringify(data));
			}
		});
	});
	
	$('#ajaxGet').bind('click', function() {
		$.ajax({
			type:  'GET',
			contentType: 'application/json',
			url: 'http://localhost:3001/userGet?userName=test & userAge=123',
			success: function(data) {
				console.log('success');
				console.log(JSON.stringify(data));
			}
		});
	});
});


