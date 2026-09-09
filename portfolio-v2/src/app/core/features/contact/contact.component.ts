import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private http = inject(HttpClient);
  private readonly formspreeUrl = 'https://formspree.io/f/xrgdgvqd';
  private dismissTimeout?: ReturnType<typeof setTimeout>;

  email = '';
  asunto = '';
  mensaje = '';
  state = signal<SubmitState>('idle');
  submitted = signal(false);

  submit(form: NgForm): void {
    this.submitted.set(true);

    if (form.invalid) {
      return;
    }

    this.state.set('sending');

    this.http.post(this.formspreeUrl, {
      'e-mail': this.email,
      asunto: this.asunto,
      mensaje: this.mensaje
    }, {
      headers: { Accept: 'application/json' }
    }).subscribe({
      next: () => {
        this.state.set('success');
        this.email = '';
        this.asunto = '';
        this.mensaje = '';
        this.submitted.set(false);
        form.resetForm();
        this.scheduleDismiss();
      },
      error: () => {
        this.state.set('error');
        this.scheduleDismiss();
      }
    });
  }

  closeToast(): void {
    if (this.dismissTimeout) clearTimeout(this.dismissTimeout);
    this.state.set('idle');
  }

  private scheduleDismiss(): void {
    if (this.dismissTimeout) clearTimeout(this.dismissTimeout);
    this.dismissTimeout = setTimeout(() => this.state.set('idle'), 6000);
  }
}
