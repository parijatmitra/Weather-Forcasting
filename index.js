$(document).ready(function () {
  var URL1 = "https://api.weather.gov/points/33,-70";
  $.getJSON(URL1, function (data1) {
    updateDOM(data1);
  });

  // Update Dom
  function updateDOM(data1) {
    var fort = data1.properties.forecast;
    var city = data1.properties.relativeLocation.properties.city;

    var URL = fort;
    $.getJSON(URL, function (data) {
      updateDOM(data);
    });
    function updateDOM(data) {
      var temperature = data.properties.periods[13].temperature;
      $("#temp").html(temperature);
    }

    $("#city").html(city);
  }
});
