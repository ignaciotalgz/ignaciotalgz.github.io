import { Component, inject } from '@angular/core';
import { SidebarComponent } from './core/features/sidebar/sidebar.component';
import { HomeComponent } from './core/features/home/home.component';
import { LayoutService } from './core/services/layout.service';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  layout = inject(LayoutService);
  title = 'portfolio-v2';
}
