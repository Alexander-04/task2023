import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/dialog/dialog.component';
import { CommonAllModule } from '@task2023/common-all'

@NgModule({
  imports: [CommonModule,CommonAllModule],
  declarations: [DialogComponent],
  exports:[DialogComponent]
})
export class SharedModule {}
