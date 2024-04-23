import { Component, Input } from '@angular/core';
import { Provider } from '../../shared/interfaces/providers.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slot-providers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slot-providers.component.html',
  styleUrl: './slot-providers.component.scss',
})
export class SlotProvidersComponent {
  @Input({ required: true }) data?: Provider[];
  isOpen = false;
}
