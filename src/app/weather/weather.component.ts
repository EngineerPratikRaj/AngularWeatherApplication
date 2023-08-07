
import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

// @Component decorator - describe the behaviour of components and templates inside class.
@Component({
  selector: 'app-weather',  // selector used to represent the component in the template like <app-weather></app-weather>
  templateUrl: './weather.component.html', // this property specify the HTML template that represents the view of the component
  styleUrls: ['./weather.component.css'] // this property used to define the CSS styles for the component.
})
export class WeatherComponent {
  city: string = ''; // Set the type of the 'city' property to 'string'
  weatherData: any; // any type, variable can hold any type of data, because the structure of the weather data can vary depending on the
                    // API response, and we want to handle different types of data without strict type checking.

  constructor(private weatherService: WeatherService) { }

  getWeatherGradient() {
    if (this.isSunny()) {
      return {
        'background-image': 'radial-gradient(3cm, orange 400% , yellow )',
        'animation-duration': '2s',
        'animation-iteration-count': 'infinite'
      };
    } else if (this.isCloudy()) {
      return {
        'background-image': 'radial-gradient(farthest-side at 50% 50%, lightslategray, whitesmoke, gray,lightslategray)',
        'animation-name': 'cloudsMoving',
        'animation-duration': '10s',
        'animation-iteration-count': 'infinite'
      };
    } else if (this.isRainy()) {
      return {
        'background-image': 'linear-gradient( gray 30%, skyblue, whitesmoke )',
        'animation-name': 'rainEffect',
        'animation-duration': '4s',
        'animation-iteration-count': 'infinite',
        'position': 'relative',
        
      };
    } else if (this.isClearSky()) {
      return {
        'background-image': 'radial-gradient(4cm, yellow 40% , whitesmoke , skyblue)',
        'animation-name': 'clearSkyEffect',
        'animation-duration': '10s',
        'animation-iteration-count': 'infinite'
      };
    }
    else if (this.isHaze()) {
      return {
        'background-image': 'radial-gradient(farthest-side at 60%, yellow, whitesmoke)',
        'animation-name': 'hazeEffect',
        'animation-duration': '2s',
        'animation-iteration-count': 'infinite'
      };
    }

    else if (this.isMist()) {
      return {
        'background-image': 'radial-gradient(farthest-side at 60% 60%, lightyellow, whitesmoke)',
        'animation-name': 'mistEffect',
        'animation-duration': '3s',
        'animation-iteration-count': 'infinite'
      };
    }

    else {
      return {
        'background-image': 'linear-gradient(45deg, #4caf50, #81c784)'
      };
    }
  }

  isSunny() {
    // Determine if it's sunny based on the temperature (greater than 35°C) and clear sky
    return (
      this.weatherData &&
      this.weatherData.main.temp > 30 &&
      this.weatherData.weather[0].description.includes('sunny')
    );
  }

  isCloudy() {
    return this.weatherData && this.weatherData.weather[0].description.includes('clouds');
  }

  isRainy() {
    return this.weatherData && this.weatherData.weather[0].description.includes('rain');
  }

  isClearSky() {
    return this.weatherData && this.weatherData.weather[0].description.includes('clear sky');
  }

  isHaze() {
    return this.weatherData && this.weatherData.weather[0].description.includes('haze');
  }

  isMist() {
    return this.weatherData && this.weatherData.weather[0].description.includes('mist');
  }

  onCityInputChange(event: Event) {
    this.city = (event.target as HTMLInputElement).value;
  }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe((data: any) => {
      this.weatherData = data;
    });
  }
}

