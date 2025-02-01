import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent, MatIconModule],
  template: `
   
    <app-header/>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
    
}
