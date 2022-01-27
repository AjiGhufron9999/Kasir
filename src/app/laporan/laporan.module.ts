import { NgModule } from "@angular/core";
import { PembelianComponent } from "./pembelian/pembelian.component";
import { PenjualanComponent } from "./penjualan/penjualan.component";
import { StokBarangComponent } from "./stok-barang/stok-barang.component";
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'pembelian',
        component:PembelianComponent
    },
    {
        path:'penjualan',
        component:PenjualanComponent
    },
    {
        path:'stok-barang',
        component:StokBarangComponent
    }
]


@NgModule({
    declarations: [
      PembelianComponent,
      PenjualanComponent,
      StokBarangComponent
    ],
    imports: [
      RouterModule.forChild(routes)
 
    ],
})
  export class laporanModule { }