import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UsersListComponent } from './components/user/users-list/users-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full'},
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserProfileComponent },
  { path: 'create-user', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
