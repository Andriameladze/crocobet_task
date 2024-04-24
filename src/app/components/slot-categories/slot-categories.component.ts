import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SlotCategory } from '../../shared/interfaces/slot-category.interface';
import { RouterModule } from '@angular/router';

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
  @Output() onCategoryChange = new EventEmitter<string>();
}
