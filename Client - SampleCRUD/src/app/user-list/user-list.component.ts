import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe((data: User[] | undefined) => {
      this.users = data;
    });
  }
}
