	$(document).ready(function(){
	"use strict";
	
	var root = 'http://localhost:3000';

	
	$("#Snimki").click(function(){
		$.ajax({
			url: root + '/novini',
			method: "GET"
		}).then(processNewsResponse);
	});
		
		function processNewsResponse(response) {
			$.each(response, function(){
				appendNews(this);
			});

		}

		function appendNews(post) {
			var list = $('div.panel-body pre#exampleSource');
			var part1 = $("<li>"+post.title+"</li>");

			part1.text(post.title);
			
			list.append(part1);
		}
	
		
		
		
		$("#addSnimka").click(function(){
			//$("div.panel-body pre#exampleSource").empty();
			
			var picTitle = $("input#imgUrl").val();


			$.ajax( root + '/snimki', {
	  			method: 'POST',
	  			data: {
	    			title: picTitle/*,
	    			text: newsText*/
	  			}
			}).then(function(data) {
	  			console.log(data);
			});
			
		});
		
		
		
		
});
