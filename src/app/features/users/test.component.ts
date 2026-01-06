import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user/user.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-test',
  imports: [RouterModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log(this.userService.getId());
  }
}
