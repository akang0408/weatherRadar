import React, { Component } from 'react';
import Form from '../Form'
import Weather from '../Weather'
import { API_KEY } from '../ApiKey'
import { AppWrapper, HeaderWrapper, SubDiv, Quote} from './styles'

class App extends Component {
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
    console.log('mickeymouse', data)
  
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
        Global Weather Radar 
        </HeaderWrapper>
        <Quote> Providing accurate, reliable and up to do date weather forecasts </Quote>
        <Quote> from around the world. </Quote>
        <br/>
        <Form getWeather={this.getWeather} />
        <br/>
        {this.state.data && this.state.city && this.state.country &&
        <Weather data={this.state.data} city={this.state.city} country={this.state.country} />
       }
      </AppWrapper>
    );
  }
}

export default App;
