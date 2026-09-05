import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PROFILE } from '../../data/profile.data';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  layout = inject(LayoutService);
  profile = PROFILE;
  navItems = [
    { label: $localize`:@@nav.about:Sobre mí`, fragment: 'sobre-mi' },
    { label: $localize`:@@nav.experience:Trabajos`, fragment: 'trabajos' },
    { label: $localize`:@@nav.projects:Proyectos`, fragment: 'proyectos' },
    { label: $localize`:@@nav.contact:Contacto`, fragment: 'contacto' }
  ];
}
