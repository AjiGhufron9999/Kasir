import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { BarangNewComponent } from './barang-new.component';
import { BarangEditComponent } from './barang-edit.component';
import { barangInterface } from './barang.interface';





@Component({
  selector: 'app-barang',
  templateUrl: './barang.component.html',
  styleUrls: ['./barang.component.css']
})
export class BarangComponent implements OnInit {

  @ViewChild("inputBox")
  _el!: ElementRef;
  selectedRowIndex: any;
  selectedRow:any;


  barang:any={}
  barangku:any=[]
  // barangku:any=[]
  constructor(
    public api:ApiService,
    public dialog:MatDialog,
    public router:Router,
    public auth:AngularFireAuth 
  ) 
  {
    console.log(this.api.getAllBarang(),"api service")
    this.dataSource = new MatTableDataSource(this.barangku)
    this.getBarang()
  }
  
  displayedColumns = ['No','kode', 'namaBarang', 'satuan', 'hargaJual','diskon','hargaBeli','Jenis','Action'];
  dataSource = new MatTableDataSource(this.barangku);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.barangku,"barangku on init" )
  }

  ngOnInit(): void {
    
    console.log(this.barangku,"data source")  
    this.getBarang()
  }

  getBarang(){
    this.api.getAllBarang().subscribe(
      (res:any)=>{
        console.log("res=>",res);
        this.barangku=res
        this.dataSource = new MatTableDataSource(this.barangku)
      }
    )
    console.log(this.barang,"barangku")
  }


  setFocus() {
    this._el.nativeElement.focus();
  }
  ngAfterViewInit() {
    this._el.nativeElement.focus();
  }
  barangDetail(data: any,i: number) {
    if(i==-1){
      let dialog= this.dialog.open(BarangNewComponent,{
        data:data
        });
        dialog.afterClosed().subscribe(res=>{ 
          if(res){
            this.barang.push(res)
            this.ngOnInit()  
          }
        } 
      )
    }
    else{
      let dialog= this.dialog.open(BarangEditComponent,{
        data:data
        });
        dialog.afterClosed().subscribe(res=>{ 
          this.barangku[i]=res
            this.ngOnInit()  
        } 
        )
    }
    console.log(data,"data")
    
  }

  deleteBarang(i:number){
    var conf = confirm('Hapus Barang?');
    if (conf){
      this.barang.splice(i,1)
    }
    this.ngOnInit()
  }
  

  
  dialogBarangEdit() {
    this.dialog.open(BarangEditComponent);
  }
  dialogKonfirmDelete(){
    this.dialog.openDialogs
  }

  highlight(row: { kode: any; }){
    this.selectedRowIndex = row.kode;
    }

    
}


function res(res: any) {
  throw new Error('Function not implemented.');
}

