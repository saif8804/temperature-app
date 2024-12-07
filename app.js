const apiKey ="78363f0e688ad6c1e31a20152e65256b";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcons = document.querySelector(".weather-icon")


async function checkWeather(city){
      const response = await fetch( url + city +`&appid=${apiKey}`);

      if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";

      }
      else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =  Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";
  
       
  
        if(data.weather[0].main == "Clouds"){
             weatherIcons.src = "images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
          weatherIcons.src = "images/clear.png";
       }else if(data.weather[0].main == "Rain"){
          weatherIcons.src = "images/rain.png";
       }else if(data.weather[0].main == "Drizzle"){
          weatherIcons.src = "images/drizzle.png";
       }else if(data.weather[0].main == "Mist"){
          weatherIcons.src = "images/mist.png";
       }else if(data.weather[0].main == "Humidity"){
          weatherIcons.src = "images/humidity.png";
       }else if(data.weather[0].main == "Wind"){
          weatherIcons.src = "images/wind.png";
       }else if(data.weather[0].main == "Snow"){
          weatherIcons.src = "images/snow.png";
       }

       document.querySelector(".Weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
  }
  
      }
   
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    
});