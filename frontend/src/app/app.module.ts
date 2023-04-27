import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UsersListComponent } from './components/user/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddUserComponent,
    UserProfileComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
