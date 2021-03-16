import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html'
})
export class DialogConfirmComponent {

  constructor(private di: MatDialogRef<DialogConfirmComponent>) { }

  onNoClick(): void {
    this.di.close();
  }
}
