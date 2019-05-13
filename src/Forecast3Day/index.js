import React from 'react'
import { Titles, DivWrapper } from './styles'

const Forecast3Day = ({ data, city, country, error }) => {
  const { list } = data;
  return (
    <DivWrapper>
      {city && country && <p>Location: {city}, {country} </p>}
      
      <div>
      <Titles>today</Titles>
      <p>Temperature: {list[0].main.temp} °F </p>
      </div>
      <p>Current Conditions: {list[0].weather[0].description} </p>
      
      <div>
      <Titles>tomorrow</Titles>
      <p>Temperature: {list[1].main.temp} °F </p>
      </div>
      <p>Conditions: {list[1].weather[0].description} </p>

      <div>
      <Titles>next day</Titles>
      <p>Temperature: {list[2].main.temp} °F </p>
      </div>
      <p>Conditions: {list[2].weather[0].description} </p>
      
      {error && <p>{error}</p> }
    </DivWrapper>
  )
}

export default Forecast3Day;