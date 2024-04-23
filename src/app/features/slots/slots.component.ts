import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsComponent {}
