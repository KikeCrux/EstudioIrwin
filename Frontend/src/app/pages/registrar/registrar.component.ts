import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  registerForm: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]]
      },
      { validator: this.matchPasswords('password', 'confirmPassword') }
    );
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { name: nombre, email: correo, password: contraseña } = this.registerForm.value;

      this.userService.registerUser({ nombre, correo, contraseña }).subscribe(
        response => {
          console.log('Usuario registrado con éxito');
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error al registrar el usuario');
        }
      );
    }
  }


  // Validador personalizado para comparar contraseñas
  matchPasswords(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passControl = formGroup.controls[password];
      const confirmPassControl = formGroup.controls[confirmPassword];

      if (confirmPassControl.errors && !confirmPassControl.errors['mismatch']) {
        return;
      }

      if (passControl.value !== confirmPassControl.value) {
        confirmPassControl.setErrors({ mismatch: true });
      } else {
        confirmPassControl.setErrors(null);
      }
    };
  }

  // Método para alternar visibilidad de contraseñas
  togglePasswordVisibility(type: 'password' | 'confirmPassword'): void {
    if (type === 'password') {
      this.showPassword = !this.showPassword;
    } else if (type === 'confirmPassword') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }
}
