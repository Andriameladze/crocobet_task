import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Provider } from '../../shared/interfaces/slot-providers.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-slot-providers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './slot-providers.component.html',
  styleUrl: './slot-providers.component.scss',
})
export class SlotProvidersComponent {
  @Input({ required: true }) data?: Provider[];
  isOpen = false;
}
