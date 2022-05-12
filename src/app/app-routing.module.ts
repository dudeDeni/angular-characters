import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharDetailComponent } from './characters/components/char-detail/char-detail.component';
import { CharListComponent } from './characters/components/char-list/char-list.component';
import { HomeComponent } from './characters/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherCurrentComponent } from './forecast/components/weather-current/weather-current.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'characters', component: HomeComponent, children: [
      { path: 'list', component: CharListComponent },
      { path: 'detail/:id', component: CharDetailComponent },
    ]
  },
  { path: 'forecast', component: WeatherCurrentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
