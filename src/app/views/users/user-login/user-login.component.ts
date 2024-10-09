
import { Component } from '@angular/core';
import { UserAuthService } from '../../../services/users/user-auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  username: string = '';
  password: string = '';

  constructor(private authService: UserAuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        console.log('Usuario autenticado:', response);
        alert('Login correcto - Se muestran detalles de usuario (GUARD)');
        this.authService.setCurrentUser(response);
        this.router.navigate(['/user-info']);
      },
      (error: any) => {
        console.error('Error de autenticación:', error);
        alert('Credenciales incorrectas');
      }
    );
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
