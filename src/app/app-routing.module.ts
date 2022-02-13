import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JoinPageComponent } from './join-page/join-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { DiscoverPageComponent } from './discover-page/discover-page.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full"},
  { path: "landing", component: LandingPageComponent },
  { path: "join", component: JoinPageComponent },
  { path: "login", component: LogInPageComponent },
  { path: "discover", component: DiscoverPageComponent }
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
  DiscoverPageComponent
];
