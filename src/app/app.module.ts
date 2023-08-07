
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service'; // Import the WeatherService

const routes: Routes = [
  { path: '', component: WeatherComponent }, // Default route to display WeatherComponent
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // Add RouterModule with the routes
  ],
  providers: [WeatherService], // Provide the WeatherService
  bootstrap: [AppComponent]
})
export class AppModule { }
