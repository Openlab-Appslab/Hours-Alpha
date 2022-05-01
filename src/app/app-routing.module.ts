import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JoinPageComponent } from './main-pages/join-page/join-page.component';
import { LogInPageComponent } from './main-pages/log-in-page/log-in-page.component';
import { DiscoverPageComponent } from './main-pages/discover-page/discover-page.component';
import { LandingPageComponent } from './main-pages/landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './sidebar-components/home/home.component';
import { ContactComponent } from './sidebar-components/contact/contact.component';
import { CalculatorComponent } from './sidebar-components/calculator/calculator.component';
import { InfoComponent } from './sidebar-components/info/info.component';
import { EmployerDashbaordComponent } from './employer view/employer-dashbaord/employer-dashbaord.component';

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full"},
  { path: "landing", component: LandingPageComponent },
  { path: "join", component: JoinPageComponent },
  { path: "login", component: LogInPageComponent },
  { path: "discover", component: DiscoverPageComponent },
  { path: "emp_dashboard", component: EmployerDashbaordComponent },
  { path: "dashboard", component: DashboardComponent, 
    children: [
    { path: "info", component: InfoComponent },
    { path: "home", component: HomeComponent },
    { path: "calculator", component: CalculatorComponent },
    { path: "contact", component: ContactComponent },
  ] },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const basicRoutingComponents = [
  LandingPageComponent,
  JoinPageComponent,
  LogInPageComponent,
  DiscoverPageComponent,
  DashboardComponent,
  HomeComponent,
  ContactComponent,
  CalculatorComponent,
  InfoComponent,
  EmployerDashbaordComponent,
  
];
