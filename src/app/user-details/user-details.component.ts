import { Component,   OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  userlist: any[]=[];
  chart: any;
  selectedUser: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userList$.subscribe((userList) => {
      this.userlist = userList;
      if(this.userlist.length>0){
        this.selectedUser = this.userlist[0];
        this.createChart(this.selectedUser);
      }
    });
  }

  //method to create chart
  createChart(user: any){
    const workoutTypes = user.workoutType;
    const workoutMinutes = user.workoutMinutes;
    console.log(workoutMinutes)
    if(this.chart){
      this.chart.destroy();
    }

    this.chart = new Chart('myChart',{
      type:'bar',
      data:{
        labels:workoutTypes,
        datasets:[{
          label:'Workout Minutes',
          barThickness: 80,
          data:workoutMinutes,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
   // Method to handle user click
   onUserClick(user: any) {
    this.selectedUser  = user; 
    this.createChart(user); 
   }
}
