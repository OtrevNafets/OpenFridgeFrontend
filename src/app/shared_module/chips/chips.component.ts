import { Component, Input } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  @Input() arrayChips: string[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.arrayChips.push(value);
    }

    event.chipInput!.clear();
  }

  remove(item: string): void {
    const index = this.arrayChips.indexOf(item);

    if (index >= 0) {
      this.arrayChips.splice(index, 1);
    }
  }

  edit(item: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(item);
      return;
    }

    const index = this.arrayChips.indexOf(item);
    if (index >= 0) {
      this.arrayChips[index] = value;
    }
  }
}
