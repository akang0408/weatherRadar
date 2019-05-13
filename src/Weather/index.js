import React from 'react'

const Weather = ({ data, city, country, error }) => {
const { main } = data.list[0];
console.log('data', data, 'city', city)
return (
   <div>
     <p>Location: {city}, {country} </p>
     <p>Temperature: {main.temp} °F </p> 
     <p>Pressure: {main.pressure} </p>
     <p>Humidity: {main.humidity} %</p>
     <p>Current Conditions: {data.list[0].weather[0].description} </p>
   </div> 
  )
}

export default Weather;