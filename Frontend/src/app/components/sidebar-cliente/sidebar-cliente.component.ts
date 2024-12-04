import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar-cliente',
  templateUrl: './sidebar-cliente.component.html',
  styleUrls: ['./sidebar-cliente.component.css']
})
export class SidebarClienteComponent {
  constructor(private userService: UserService, private router: Router) { }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
