import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WellComponent } from './well/well.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'well', component: WellComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WellComponent,
    AboutComponent,
    HomeComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
