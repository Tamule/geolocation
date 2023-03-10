


function showWeather(response) {
    let h1 = document.querySelector("h1");
    let temperature = Math.round(response.data.main.temp);
    h1.innerHTML = `It is currently ${temperature}° in ${response.data.name}`;
  }
  
  function retrievePosition(position) {
    let apiKey = "d46d679163461eee53117665fa5f4b6e";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
  }
  
  navigator.geolocation.getCurrentPosition(retrievePosition);
  
