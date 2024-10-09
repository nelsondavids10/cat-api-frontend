import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatBreedListComponent } from './views/cats/cat-breed-list/cat-breed-list.component';
import { UserLoginComponent } from '../app/views/users/user-login/user-login.component';
import { UserRegisterComponent } from '../app/views/users/user-register/user-register.component';
import { UserInfoComponent } from '../app/views/users/user-info/user-info.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'user-info', component: UserInfoComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'breeds', component: CatBreedListComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
