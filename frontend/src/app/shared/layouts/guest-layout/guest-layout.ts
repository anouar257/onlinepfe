import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-guest-layout',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  template: `
    <app-header />
    <main class="app-content">
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: [`
    .app-content {
      min-height: calc(100vh - 80px); /* 80px is header height */
    }
  `]
})
export class GuestLayoutComponent {}
