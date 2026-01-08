import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../core/user/user.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log(this.userService.getId());
  }

  ngOnDestroy() {
    console.log('Home Distrutto');
  }
}
