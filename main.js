let weather  = {
    "apiKey": "b5b13c26ac42be3e0f1711ee8cdf1c9e",

    fetchWeather: function(city){
        fetch
        (
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&appid="
            + this.apiKey 
            + "&units=metric"
        )
        .then((response)=> response.json())
        .then((data) => {
                const {name} = data;
                const {icon, description} = data.weather[0];
                const {temp, humidity} = data.main;
                const {speed} = data.wind;
                console.log(name, icon, temp, humidity, speed);
                document.querySelector(".city").innerText = "Weather in "+ name;
                document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
                document.querySelector(".description").innerText = description;
                document.querySelector(".temp").innerText = temp + "°C";
                document.querySelector(".humidity").innerText = "Humidity: "+ humidity + "%";
                document.querySelector(".wind").innerText = "Wind Speed: "+ speed + "km/h";
            }
        );
    },

    displayWeather: function(data){
        
    }

}