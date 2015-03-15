	$(document).ready(function(){
	"use strict";
	
	var root = 'http://localhost:3000';

	
	
		$.ajax({
			url: root + '/novini',
			method: "GET"
		}).then(processNewsResponse);
	
		
		function processNewsResponse(response) {
			$.each(response, function(){
				appendNews(this);
			});

		}

		function appendNews(post) {
			   var list = $('div.panel-body pre#exampleSource');

			   var part1 = $("<font size='5' class='pull-left' >"+post.title+"</font>");
			   var part2 = $("<pre>"+post.body+"</pre>");

			   part1.text(post.title);
			   part2.text(post.body);
			   
			   // list.html("<pre>");
			   list.append(part1);
			   list.append("<br>");
			   list.append("<br>");
			   list.append("<br>");
			   list.append(part2);
			   list.append("<br>");
			   list.append("<br>");

			  }
	
	



		$.ajax({
			url: root + '/snimki',
			method: "GET"
		}).then(processPhotoResponse);



		function processPhotoResponse(response) {
			$.each(response, function(){
				appendPhoto(this);
			});

		}

		function appendPhoto(post) {
			var list = $('div.panel-body pre#exampleSource');
			 var part1 = $("<img src='"+post.title+"'><br>");


			part1.text(post.title);
			list.append(part1);
			
		}

		
		
});
