import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/forecast.service';

@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.css']
})
export class WeatherCurrentComponent implements OnInit {

  constructor(public forecastService: ForecastService) { }

  ngOnInit(): void {
    this.forecastService.getCurrentWeather()
  }

}
