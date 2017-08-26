
/*
var cels = "";
var fahr = "";
*/
var endpoint = "https://fcc-weather-api.glitch.me/api/current?";
var param = "lon=:" + long + "&lat=:" + lat;
var lat, long;

//use geolocation in html5 to get lat and long for ajax call parameters

$(document).ready(function() {
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		lat = "lat=" + position.coords.latitude;
		long = "lon=" + position.coords.longitude;
		console.log(lat, long); 
		getWeather(lat,long);
		}); 
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	//-- tests that this geolocator is working
		


//make the call
function getWeather(lat,lon) {	
	var endpoint = "https://fcc-weather-api.glitch.me/api/current?";
	var param = lat + "&" + long;
	var api = endpoint + param;
	$.ajax({ 
				url: "api",
				success: function (result) {
      			$(".icon").text(result.icon);}	
				
				/*method: 'GET', 	
				dataType: "json", 

				data: {
					"weather": "description",
					"weather": "icon",
					"main": "temp"
				},
				
				cache: false, 

				success: function(data) { 
				console.log("got it");//to test that this is working
				$(".temp").append(main.temp); 
				//console.log(data.temp); It's this section I need to figure out. 
				$(".icon").append(weather.icon);
				$(".description").append(weather.description);}*/
			});
	  };
	});
	 	
	
		/*, 

		error: function() { 

		alert("Oh no! We couldn't find your location."); 
		});*/
	
	
/*
$("button").click(function(){

	function toCelsius(fahr) {
		cels = (5/9 * (f-32));
		$("temp").innerHTML = Math.round(cels);
		$(".changeT").innerHTML = "Change to F";
	}


	function toFahr(cels) {
		fahr = (9/5 * (f+32));
		$("temp").innerHTML = Math.round(fahr);
		$(".changeT").innerHTML = "Change to C";
	}
});



	if(temp > 81) =>
	if (temp >66 && <80) =>
	if(temp >50 && <65) =>
	if(temp >33 && <49) =>
		//logic if x - x , cold: frigid icon/snowperson 
		//if x - x , medium: sweater
		//if x-x , nice: skirt or shorts
		//if x-x, hot: sun



var geo = navigator.geolocation.getCurrentPosition(function(position) {
	position.coords.latitude, position.coords.longitude
})

if (navigator.geolocation)
 {
  window.onload = function() {
  	var currentPosition;
  	function getCurrentLocation (position) {
  		currentPosition = position;
  		latitude = currentPosition.coords.latitude;
  		longitude = currentPosition.coords.longitude;
  		console.log(currentPosition)
	
}


if (navigator.geolocation)
 {
  window.onload = function() {
  	var currentPosition;
  	function getCurrentLocation (position) {
  		currentPosition = position;
  		latitude = currentPosition.coords.latitude;
  		longitude = currentPosition.coords.longitude;
  		console.log(currentPosition)
	}
*/