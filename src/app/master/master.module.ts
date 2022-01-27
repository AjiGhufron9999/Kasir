import { NgModule } from "@angular/core";
import { BarangComponent } from "./barang/barang.component";
import { CustomerComponent } from "./customer/customer.component";
import { InfoIMEComponent } from "./info-ime/info-ime.component";
import { SupplierComponent } from "./supplier/supplier.component";
import { BarangNewComponent } from './barang/barang-new.component';
import { BarangEditComponent } from './barang/barang-edit.component';

import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";



export const routes: Routes = [
    {
        path:'barang',
        component:BarangComponent
    },
    {
        path:'customer',
        component:CustomerComponent
    },
    {
        path:'supplier',
        component:SupplierComponent
    },
    {
        path:'info-ime',
        component:InfoIMEComponent
    }
]


@NgModule({
    declarations: [
      BarangComponent,
      CustomerComponent,
      SupplierComponent,
      InfoIMEComponent,
      BarangNewComponent,
      BarangEditComponent
    ],
    entryComponents:[
        BarangNewComponent,
        BarangEditComponent
    ],
    imports: [
      RouterModule.forChild(routes),
      MatTableModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatDialogModule,
      MatOptionModule,
      MatSelectModule,
      CommonModule, 
      FormsModule,
    //   HttpClient,
    //   HttpClientModule
    ],
})
  export class masterModule { }