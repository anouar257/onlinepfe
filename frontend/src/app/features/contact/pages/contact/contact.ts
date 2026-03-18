import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './contact.html',
    styleUrl: './contact.scss',
})
export class Contact {
    name = '';
    email = '';
    subject = '';
    message = '';
    isSending = false;
    sent = false;

    onSubmit(): void {
        if (!this.name || !this.email || !this.message) return;
        this.isSending = true;
        setTimeout(() => {
            this.isSending = false;
            this.sent = true;
        }, 1200);
    }
}
