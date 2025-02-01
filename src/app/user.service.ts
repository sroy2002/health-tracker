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
      workoutMinutes: 60,
      numberOfWorkouts: 2
    },
    {
      userName: 'Jane Smith',
      workoutType: ['Yoga', 'Swimming'],
      workoutMinutes: 90,
      numberOfWorkouts: 2
    },
    {
      userName: 'Bob Johnson',
      workoutType: ['Weightlifting'],
      workoutMinutes: 45,
      numberOfWorkouts: 1
    }
  ]);
  userList$ = this.userListSource.asObservable();

  constructor() { }

  //method to add new user
  addUser(newUser:any){
    const currentUserList =  this.userListSource.value;
    this.userListSource.next([...currentUserList,newUser]);
  }
}
