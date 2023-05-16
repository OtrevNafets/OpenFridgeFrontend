import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent {
  minValueSlider = 1;
  maxValueSlider = 3;
  stepSlider = 1;
  arrayForChips: string[] = ['Turtok', 'Pikachu', 'salamander'];
}
