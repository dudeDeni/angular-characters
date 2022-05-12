import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCurrentComponent } from './components/weather-current/weather-current.component';



@NgModule({
  declarations: [
    WeatherCurrentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ForecastModule { }
