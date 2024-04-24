import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlotCategory } from '../../shared/interfaces/slot-category.interface';

@Component({
  selector: 'app-slot-categories',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './slot-categories.component.html',
  styleUrl: './slot-categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotCategoriesComponent {
  @Input({ required: true }) data?: SlotCategory[];
}
