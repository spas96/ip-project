	$(document).ready(function(){
	"use strict";
	
	var root = 'http://localhost:3000';

	
	$("#Novini").click(function(){
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
	
		
		
		
		$("#addNovina").click(function(){
			//$("div.panel-body pre#exampleSource").empty();
			
			var newsTitle = $("input#newsTitle").val();
			var newsText = $("textarea#newsText").val();


			$.ajax( root + '/novini', {
	  			method: 'POST',
	  			data: {
	    			title: newsTitle,
	    			body: newsText
	  			}
			}).then(function(data) {
	  			console.log(data);
			});
			
		});
		
		
		
		
});
