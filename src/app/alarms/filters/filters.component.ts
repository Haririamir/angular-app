import { Component, EventEmitter, Inject, Output } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  search: string;
  name: string;
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class DialogOverviewExample {
  search: string = '';
  name: string = '';
  @Output() searchData = new EventEmitter<string>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: { name: this.name, search: this.search },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.search = result;
      this.searchData.emit(result);
    });
  }
}

@Component({
  selector: 'dialog-filters',
  templateUrl: './dialog-filter.component.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
