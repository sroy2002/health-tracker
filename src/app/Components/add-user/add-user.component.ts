import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-user',
  imports: [MatIconModule, FormsModule,CommonModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  
  userName: string = '';
  workoutType: string[] = [];
  workoutMinutes: string = '';
  workoutOptions: string[] = ['Running', 'Cycling', 'Yoga', 'Swimming', 'Weightlifting'];
  isDropdownOpen: boolean = false;

  checkboxStates: { [key: string]: boolean } = {};

  constructor(private userService: UserService) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  

  onCheckboxChange(event: any) {
    const value = event.target.value;
    if (event.target.checked) {
      this.workoutType.push(value);
      this.checkboxStates[value] = true;
    } else {
      const index = this.workoutType.indexOf(value);
      if (index > -1) {
        this.workoutType.splice(index, 1);
      }
      this.checkboxStates[value] = false;
    }
  }

  clearWorkoutTypes() {
    this.workoutType = [];
    this.workoutOptions.forEach(option => {
      this.checkboxStates[option] = false; 
    });
  }

  onSubmit() {
    if (this.userName && this.workoutType.length > 0 && this.workoutMinutes) {
      const workoutMinutesArray = this.workoutMinutes.split(',').map(min => parseInt(min.trim(), 10)); // Convert to numbers
     
      const newUser  = {
        userName: this.userName,
        workoutType: this.workoutType,
        workoutMinutes: workoutMinutesArray,
        numberOfWorkouts: this.workoutType.length
      };
    
      this.userService.addUser (newUser );
      this.userName = '';
      this.workoutType = [];
      this.workoutMinutes = '';
      this.isDropdownOpen = false; 
    }
  }
}