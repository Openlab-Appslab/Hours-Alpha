import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, basicRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRoleComponent } from './admin-role/admin-role.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
<<<<<<< HEAD
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 39518fab42ad505a4c232cdd10aa0820e38c7f6f

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
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
<<<<<<< HEAD
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
=======
    ReactiveFormsModule,
>>>>>>> 39518fab42ad505a4c232cdd10aa0820e38c7f6f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
