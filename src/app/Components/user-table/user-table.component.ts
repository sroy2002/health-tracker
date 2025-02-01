import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-user-table',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent implements OnInit{
  userList: any[] = [];
  workoutOptions: string[] = ['Running', 'Cycling', 'Yoga', 'Swimming', 'Weightlifting'];
  filter: string = '';
  constructor(private userService: UserService){}
  ngOnInit(): void {
    this.userService.userList$.subscribe((userList)=>{
      this.userList = userList;
      console.log(userList)
    })
  }
  get filteredUsers() {
    if (this.filter === "") { // Check for empty string instead of "All"
      return this.userList;
    }
    if (this.filter) {
      return this.userList.filter(user => user.workoutType.includes(this.filter));
    }
    return this.userList;
  }
  }

