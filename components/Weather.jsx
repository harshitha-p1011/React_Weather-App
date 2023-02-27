import React, { useEffect, useState} from "react";
function WeatherCity(){
    const [inputweather, setInputweather]= useState("");
    const [data, setData] =useState(null);
    const [currentCity, setCurrentCity]= useState("");
    const API_KEY="4be44484231d654eb5d6604ca12becdf"
    const getWeatherdetail=(api, query)=>{
        let url=`https://api.openweathermap.org/data/2.5/weather?q={query}&units=metric&appid={api}`;
        fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then ((res)=>{
            setData(res.main)
            setCurrentCity(query)
        })
        .catch((error)=>{
            console.log("error in data", error)
            setData(null);
        });
    };
    useEffect(()=>{
        getWeatherdetail(API_KEY, inputweather);
    }, [inputweather]);
    return(
        <div>
            <input className="weather-name-city" 
            type="text"
            placeholder="Enter City name" value={inputweather} onInput={(e)=> setInputweather(e.target.value)}/>
            {!inputweather.length ? null: data ? (
                <div>
                    <p className="weather-city">Weather Detail of City: {currentCity}</p>
                    <div className="weather-info">
                        <p>current Temperature:{data.temp} c</p>
                        <p>Temperature Range:{data.temp_min} c to {data.temp_max} C</p>
                        <p>Humidity:{data.humidity}</p>
                        <p>Sea Level:{data.sea_level}</p>
                        <p>Ground Level:{data.grnd_level}</p>
                    </div></div>
            ):(
                <p className="weather-city-name">Enter valid city name</p>
            )}
        </div>
    );
}
export default WeatherCity;