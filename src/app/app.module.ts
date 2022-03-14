import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, basicRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRoleComponent } from './admin-role/admin-role.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './sidebar-components/home/home.component';
import { StatsComponent } from './sidebar-components/stats/stats.component';
import { CalculatorComponent } from './sidebar-components/calculator/calculator.component';
import { ContactComponent } from './sidebar-components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    basicRoutingComponents,
    AdminRoleComponent,
    UserRoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
