import { NgModule } from "@angular/core";
import { KassaComponent } from "./kassa/kassa.component";
import { PembelianComponent } from "./pembelian/pembelian.component";
import { PenjualanComponent } from "./penjualan/penjualan.component";
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
        path:'kassa',
        component:KassaComponent
    }
]


@NgModule({
    declarations: [
      PembelianComponent,
      PenjualanComponent,
      KassaComponent
    ],
    imports: [
      RouterModule.forChild(routes)
 
    ],
})
  export class transaksiModule { }