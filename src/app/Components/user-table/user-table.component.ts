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

  currentPage: number = 1;
  itemsPerPage: number = 5; 
  totalItems: number = 0;

  constructor(private userService: UserService){}
  ngOnInit(): void {
    this.userService.userList$.subscribe((userList)=>{
      this.userList = userList;
      this.totalItems = this.userList.length; 
    })
  }
  get filteredUsers() {
    let users = this.userList;
    if (this.filter === "") { 
      users = this.userList;
    }
    if (this.filter) {
      users = this.userList.filter(user => user.workoutType.includes(this.filter));
    }
    // return this.userList;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return users.slice(startIndex, startIndex + this.itemsPerPage);
  }

    // Method to change page
    changePage(page: number) {
      this.currentPage = page;
    }

    get totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    }

}

