import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-buscador-admin',
  templateUrl: './buscador-admin.component.html',
  styleUrls: ['./buscador-admin.component.css']
})
export class BuscadorAdminComponent {
  constructor(private userService: UserService, private router: Router) { }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
