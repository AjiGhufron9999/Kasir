import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-barang-new',
  templateUrl: './barang-new.component.html'
})
export class BarangNewComponent implements OnInit {

  
  constructor(
    public api:ApiService,
    public dialogref:MatDialogRef<BarangNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
  }

  saveData(){
    this.api.postBarang('barang',this.data).subscribe(
      (res:any)=>{
        console.log(res,"res ")
        this.dialogref.close(this.data)
        console.log(this.data, "this data")
      }
    )
    
  }
  cancel(){
    this.dialogref.close()
    this.ngOnInit()
  }

}
