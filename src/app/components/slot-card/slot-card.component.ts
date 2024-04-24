import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../shared/interfaces/game.interface';

@Component({
  selector: 'app-slot-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slot-card.component.html',
  styleUrl: './slot-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotCardComponent {
  @Input() data?: Observable<Game[]>;
}
