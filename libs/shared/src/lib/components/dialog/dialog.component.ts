import { Component, Inject, inject } from '@angular/core';
import { DIALOG_DATA} from '@angular/cdk/dialog';

@Component({
  selector: 'task2023-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {

constructor(@Inject(DIALOG_DATA) public data: any) {
}
}
