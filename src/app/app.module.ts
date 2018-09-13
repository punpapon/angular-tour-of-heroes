import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {  MessagesComponent } from './messages/messages.component';
import { AppRountingModule } from './app-rounting.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule, InMemoryDbService} from 'angular-in-memory-web-api';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { InMemoryDataService } from 'src/app/in-memory-data.service';
import { TesterComponent } from './tester/tester.component';
import { VoterComponent } from './voter/voter.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { ComponentComponent } from './components/component.component';

import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    MessagesComponent,
    TesterComponent,
    VoterComponent,
    Component1Component,
    Component2Component,
    ComponentComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule,
    AppRountingModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService , { dataEncapsulation: false })
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
