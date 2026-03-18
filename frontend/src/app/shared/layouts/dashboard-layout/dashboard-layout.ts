import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar';
import { TopbarComponent } from '../../components/topbar/topbar';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  template: `
    <div class="dashboard-wrapper">
      <aside class="dashboard-sidebar">
        <app-sidebar />
      </aside>
      
      <div class="dashboard-main">
        <header class="dashboard-topbar">
          <app-topbar />
        </header>

        <main class="dashboard-content">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard-layout.scss']
})
export class DashboardLayoutComponent {}
