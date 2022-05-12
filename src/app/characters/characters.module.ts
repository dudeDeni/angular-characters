import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharListComponent } from './components/char-list/char-list.component';
import { CharDetailComponent } from './components/char-detail/char-detail.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CharListComponent,
    CharDetailComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class CharactersModule { }
