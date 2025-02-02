import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //creating a BehaviourSubject to store the user list

  private userListSource = new BehaviorSubject<any[]>([
    {
      userName: 'John Doe',
      workoutType: ['Running', 'Cycling'],
      workoutMinutes: [60,20],
      numberOfWorkouts: 2
    },
    {
      userName: 'Jane Smith',
      workoutType: ['Yoga', 'Swimming'],
      workoutMinutes: [20,90],
      numberOfWorkouts: 2
    },
    {
      userName: 'Bob Johnson',
      workoutType: ['Weightlifting'],
      workoutMinutes: [45,30],
      numberOfWorkouts: 1
    }
  ]);
  userList$ = this.userListSource.asObservable();

  constructor() { }

  //method to add new user
  addUser (newUser :any) {
    const currentUserList = this.userListSource.value;
    newUser .totalWorkoutMinutes = this.calculateTotalWorkoutMinutes(newUser.workoutMinutes);
    this.userListSource.next([...currentUserList, newUser ]);
  }

  private calculateTotalWorkoutMinutes(workoutMinutes: number[]): number {
    return workoutMinutes.reduce((total, minutes) => total + minutes, 0);
  }
}
