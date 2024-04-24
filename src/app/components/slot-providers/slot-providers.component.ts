import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Provider } from '../../shared/interfaces/slot-providers.interface';

@Component({
  selector: 'app-slot-providers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './slot-providers.component.html',
  styleUrl: './slot-providers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotProvidersComponent {
  @Input({ required: true }) data?: Provider[];
  @Output() onProviderChange = new EventEmitter<string>();
  isOpen = false;
}
