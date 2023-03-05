import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {  provideDatabase, getDatabase} from "@angular/fire/database";
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MasterComponent } from './pages/master/master.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'master', component: MasterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'reports', component: ReportsComponent },
];

@NgModule({
  exports: [RouterModule],
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MasterComponent,
    HomeComponent,
    ReportsComponent,
  
  ],
  imports: [
RouterModule.forRoot(routes),
BrowserModule,
FormsModule,
AppRoutingModule,
provideFirebaseApp(()=> initializeApp(environment.firebase)),
provideDatabase(()=> getDatabase())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
