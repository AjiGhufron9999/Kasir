import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-barang-edit',
  templateUrl: './barang-edit.component.html'
})
export class BarangEditComponent implements OnInit {

  constructor(
    public dialogref:MatDialogRef<BarangEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
  }

  saveData(){
    this.dialogref.close(this.data)
  }
  cancel(){

  }

}
