import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-slot-card',
  standalone: true,
  imports: [],
  templateUrl: './slot-card.component.html',
  styleUrl: './slot-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotCardComponent {
  @Input() data!: any;
}
