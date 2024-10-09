import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgModule } from '@angular/core';
import { CatBreedListComponent } from './views/cats/cat-breed-list/cat-breed-list.component';
import { AppRoutingModule } from './app.routing.module';
import { CatBreedService } from './services/cats/cat-breed.service';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './views/users/user-login/user-login.component';
import { UserRegisterComponent } from './views/users/user-register/user-register.component';
import { UserAuthService } from './services/users/user-auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserInfoComponent } from './views/users/user-info/user-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CatBreedListComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    //NoopAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    CarouselModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CatBreedService, UserAuthService],
  bootstrap: [AppComponent ]
})
export class AppModule {}
