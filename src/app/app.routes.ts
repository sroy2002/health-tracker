import { Routes } from '@angular/router';

export const routes: Routes = [{
    path:'',
    pathMatch:'full',
    loadComponent:()=>{
        return import('./home/home.component').then(
            (m)=>m.HomeComponent
        );
    }
},{
    path:'user-details',
    loadComponent:()=>{
        return import ('./user-details/user-details.component').then(
            (m)=>m.UserDetailsComponent
        );
    }
}];
