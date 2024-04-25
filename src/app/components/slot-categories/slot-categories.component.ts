import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlotCategory } from '../../shared/interfaces/slot-category.interface';
import { ImageSourcePipe } from '../../shared/pipes/img-src.pipe';

@Component({
  selector: 'app-slot-categories',
  standalone: true,
  templateUrl: './slot-categories.component.html',
  styleUrl: './slot-categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, ImageSourcePipe],
})
export class SlotCategoriesComponent {
  @Input({ required: true }) data?: SlotCategory[];
}
