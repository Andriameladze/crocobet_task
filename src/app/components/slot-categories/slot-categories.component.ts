import { Component, Input } from '@angular/core';
import { SlotCategory } from '../../shared/interfaces/slot-category.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-slot-categories',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './slot-categories.component.html',
  styleUrl: './slot-categories.component.scss',
})
export class SlotCategoriesComponent {
  @Input({ required: true }) data?: SlotCategory[];
}
