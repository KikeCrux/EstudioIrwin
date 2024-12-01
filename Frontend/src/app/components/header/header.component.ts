import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.loggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  logout(): void {
    this.userService.logout();
    location.reload();
  }

}
