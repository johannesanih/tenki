const API_KEY = '420f14dbd0ccb9151662789a2a16a69e';
const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

var container = $("#container"), weather_form = $("#weather-form"), submitBTN = $("#submitBTN"), weather_result_container = $("#c-main-result>#result"), weather_result = $("#c-main-result");

submitBTN.click(function (e) {

	weather_result_container.html("");
	$("#res").remove();
	weather_result.prepend("<h3 id='ld'>Loading...</h3>");

	if($("#city").val() == "" || $("#city").val() == " " || $("#city").val() == null) {
		alert("Please provide city");
		e.preventDefault();
	} else {
		weather_result.removeClass("hide");

		var url = API_ENDPOINT+"?q="+$("#city").val()+"&appid="+API_KEY;
		var temp_celcius;

		$.get(url, function(data) {

			temp_celcius = Math.ceil(data.main.temp - 273);

			$("#ld").remove();
			$("#ld").remove();
			
			weather_result.prepend("<h3 id='res'>Result</h3>");

			weather_result_container.append("<h4>City: "+data.name+"</h4>");
			weather_result_container.append("<h4>Country: "+data.sys.country+"</h4>");
			weather_result_container.append("<h4>Weather: "+data.weather[0].main+"<h4>");
			weather_result_container.append("<h4>Description: "+data.weather[0].description+"</h4>");
			weather_result_container.append("<h4>Temperature: "+temp_celcius+"<sup>o</sup>C</h4>");
			weather_result_container.append("<h4>Wind Speed: "+data.wind.speed+"</h4>");
		});

	}

});