import React from 'react';
import { AppWrapper, HeaderWrapper, Quote } from './styles';
import Forecast5Day from '../Forecast5Day';
import { API_KEY } from '../ApiKey'
import Form from '../Form'

class FiveDay extends React.Component {
  state = {
    data: undefined,
    city: undefined,
    country: undefined,
    error: undefined
  }
  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value
    const country = event.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&appid=${API_KEY}`);
    const data = await api_call.json();
  
    if (city && country) {
      this.setState({
        data: data,
        city: data.city.name,
        country: data.city.country,
      })
    } else {
      this.setState({
        data: undefined,
        city: undefined,
        country: undefined,
        error: 'Please enter a City and Country value.',
      })
    }
  }
  
render() {
  return (
    <AppWrapper>
      <HeaderWrapper>
        five day forecast
      </HeaderWrapper>
      <Quote>
        accurate, reliable and up to date forecast for the next five days
      </Quote>
      <br/>
      <Form getWeather={this.getWeather} />
      { this.state.data && this.state.city && this.state.country &&
      <Forecast5Day data={this.state.data} city={this.state.city} country={this.state.country} error={this.state.error} />
      }
    </AppWrapper>
    )
  }
}

export default FiveDay;