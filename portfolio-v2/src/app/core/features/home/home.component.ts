import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { EXPERIENCES } from '../../data/experiences.data';
import { PROJECTS } from '../../data/projects.data';
import { CardSize, DetailContent, Experience, Project } from '../../models/content.models';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

const SIZE_CLASSES: Record<CardSize, string> = {
  lg: 'sm:col-span-2 sm:self-start',
  md: 'sm:col-span-1 sm:self-start',
  sm: 'sm:col-span-1 sm:self-start'
};

@Component({
  selector: 'app-home',
  imports: [CommonModule, DetailModalComponent, AboutComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  experiences = EXPERIENCES;
  projects = PROJECTS;
  selected = signal<DetailContent | null>(null);

  sizeClass(size: CardSize): string {
    return SIZE_CLASSES[size];
  }

  openExperience(exp: Experience): void {
    this.selected.set({
      title: exp.title,
      subtitle: `${exp.organization} · ${exp.period}`,
      logo: exp.logo,
      fullDescription: exp.fullDescription,
      stack: exp.stack,
      links: exp.links
    });
  }

  openProject(proj: Project): void {
    if (proj.comingSoon) return;
    this.selected.set({
      title: proj.title,
      subtitle: proj.period,
      logo: proj.logo,
      fullDescription: proj.fullDescription,
      stack: proj.stack,
      links: proj.links
    });
  }

  closeModal(): void {
    this.selected.set(null);
  }
}
