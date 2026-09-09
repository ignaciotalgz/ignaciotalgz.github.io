import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { PROFILE } from '../../data/profile.data';
import { SKILLS } from '../../data/skills.data';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  profile = PROFILE;
  skills = SKILLS;
  expanded = signal(false);
  expandedSkills = signal<Set<string>>(new Set());

  toggle(): void {
    this.expanded.update(v => !v);
    const isExpanded = this.expanded();
    this.expandedSkills.update(() => {
      if (!isExpanded) {
        return new Set();
      }

      return new Set(this.skills.map(skill => skill.category));
    });
  }

  toggleSkill(category: string): void {
    this.expandedSkills.update(set => {
      const next = new Set(set);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  }

  isSkillExpanded(category: string): boolean {
    return this.expandedSkills().has(category);
  }
}
