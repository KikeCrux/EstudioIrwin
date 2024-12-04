import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email: correo, password: contraseña } = this.loginForm.value;

      this.userService.loginUser({ correo, contraseña }).subscribe(
        response => {
          console.log('Usuario autenticado con éxito');
          this.userService.setLoggedIn(true);
          this.router.navigate(['/dashboardC']);
        },
        error => {
          console.error('Error al autenticar el usuario');
        }
      );
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
