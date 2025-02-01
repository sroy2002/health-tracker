import { Component } from '@angular/core';
import { AddUserComponent } from '../Components/add-user/add-user.component';
import { UserTableComponent } from '../Components/user-table/user-table.component';
@Component({
  selector: 'app-home',
  imports: [AddUserComponent,UserTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
