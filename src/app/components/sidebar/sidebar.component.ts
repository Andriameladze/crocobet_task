import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { sidebarItems } from '../../shared/consts/sidebar-items';
import { sidebarItem } from '../../shared/interfaces/siderbar-item.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  sidebarItems: sidebarItem[] = sidebarItems;
}
