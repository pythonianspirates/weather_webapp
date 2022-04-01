let weather = {
"apiKey":"37275699f78c298a64c3f9c07cd2aa75",
fetchweather: function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city 
    +"&units=metric&appid="
    + this.apiKey
    )
    .then((response) => response.json())
    .then((data)=>this.displayWeathwer(data));
  },
  displayWeathwer:function(data){
      const{name} = data;
      const{icon, description } = data.weather[0];
      const{temp, humidity}=data.main;
      const{speed} = data.wind;
      console.log(name,icon,description,temp,humidity,speed);
      document.querySelector(".city").innerText = "Weather in " +name;
      document.querySelector(".icon").src =" " + icon + " .png";
      document.querySelector(".description").innerText= description;
      document.querySelector(".temp").innerText= temp +"°C";
      document.querySelector(".humidity").innerText= "humidity: "+ humidity + " % ";
      document.querySelector(".wind").innerText="wind speed : " + speed + "km/hr" ;
      
  },
  search:function () {
      this.fetchweather(document.querySelector(".search-bar").value);
  }
};
document
.querySelector(".search button")
.addEventListener("click" , function (){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function (event) {
    if(event.key=="Enter"){
        weather.search();
    }
})

weather.fetchweather("Haldia");