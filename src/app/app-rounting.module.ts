import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { HeroesComponent } from './heroes/heroes.component'
import { Route } from '@angular/compiler/src/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TesterComponent } from 'src/app/tester/tester.component';
import { ComponentComponent } from './components/component.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'tester', component: TesterComponent },
  { path: 'components', component:ComponentComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]  
})

export class AppRountingModule { }

