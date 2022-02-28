import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, basicRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRoleComponent } from './admin-role/admin-role.component';
import { UserRoleComponent } from './user-role/user-role.component';

@NgModule({
  declarations: [
    AppComponent,
    basicRoutingComponents,
    AdminRoleComponent,
    UserRoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
