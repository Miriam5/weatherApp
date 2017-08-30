
//var endpoint = "https://fcc-weather-api.glitch.me/api/current?";
//var param = "lon=:" + long + "&lat=:" + lat;
//var lat, long;
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
      	url: api,
        success: function (result) {
        // You have a div inside your html that has a class of icon
        // add the icon as background image instead
        
	        $(".location").html("The weather for " + result.name + " is: ");
	        $(".time").html("Time: " + new Date().getHours() + ":" + new Date().getMinutes());
	        $(".temp").html("Temperature: " + result.main.temp + " C");
	        $(".description").html(result.weather[0].description);
	        $(".humidity").html("Humidity: " + result.main.humidity);
	        $(".background-image").css('background-image', 'url(' + result.weather[0].icon +')');
	         //$(".icon").css('background-image', 'url(' + result.weather[0].icon + ')'); 
	         // logging all the data
	        console.log(result.main.humidity);
	        console.log(result.weather[0].icon);
	        console.log(result);
        },
        error: function() {
       	$(".loading").html("The server doesn't seem to be working.");	
        }  
     });
  };
});   
        /*
<section class="container"> make container the flex display 
		<p id="loading"></p>
		
		<div class="info">	
			<p class="location"></p>
			<p class="time"></p>
			<p class="temp"></p>	
			<p class="description"></p>
			<p class="humidity"></p>
			<img src="">
			<div class="icon"></div>

		</div>		
	</section>




        method: 'GET',  
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
  
  /*
var cels = "";
var fahr = "";

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
