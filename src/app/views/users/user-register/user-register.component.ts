import { Component } from '@angular/core';
import { UserAuthService } from '../../../services/users/user-auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss',
})
export class UserRegisterComponent {
  user = {
    name: '',
    identification: '',
    email: '',
    age: 0,
    username: '',
    password: ''
  };

  constructor(private authService: UserAuthService, private router: Router) {}

  register(): void {
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('Usuario registrado:', response);
        alert('Usuario registrado con exito');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error en el registro:', error);
        alert('Error al registrar usuario');
      }
    );
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
