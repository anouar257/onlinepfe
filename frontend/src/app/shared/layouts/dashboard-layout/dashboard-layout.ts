import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="dashboard-wrapper">
      <!-- Sidebar placeholder -->
      <aside class="dashboard-sidebar">
         <div>EduPlanet Sidebar</div>
      </aside>
      
      <div class="dashboard-main">
        <!-- Topbar placeholder -->
        <header class="dashboard-topbar">
           <div>Topbar</div>
        </header>
        
        <!-- Content Area -->
        <main class="dashboard-content">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard-layout.scss']
})
export class DashboardLayoutComponent {}
