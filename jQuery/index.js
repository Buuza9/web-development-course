//if the script tags we mentioned insied the head tag,
//then you have to use the following statement of code.

// $(document).ready(function () {
// 	$("h1").css("color", "red");
// });

// $('button').text('<em>hello<em/>')

// $("a").attr("href", "https://linkedin.com");

// for (var i = 0; i < 6; i++) {
// 	document
// 		.querySelectorAll("button")
// 		[i].addEventListener("click", function () {
// 			document.querySelector("h1").style.color = "purple";
// 		});
// }

//We can implement the above task by using jQuery

// $("button").click(function () {
// 	$("h1").css("color", "purple");
// });

// $("input").keypress(function (event) {
// 	$("h1").text(event.key);
// });

$("button").on("click", function () {
	// $("h1").fadeToggle();
	// $("h1").slideToggle();
	$("h1").animate({
		opacity: 0.5,
		color: "purple"
	});
});
