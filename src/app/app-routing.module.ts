import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDaftarComponent } from './login-daftar/login-daftar.component';
import { MenuUtamaComponent } from './menu-utama/menu-utama.component';

const routes: Routes = [
  {
    path:'menu-utama',component:MenuUtamaComponent
  },
  {
    path:'login-daftar',component:LoginDaftarComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/login-daftar'
  },
  {
    path:'master',
    loadChildren:()=>import('./master/master.module').then(mod=>mod.masterModule)
  },
  {
    path:'laporan',
    loadChildren:()=>import('./laporan/laporan.module').then(mod=>mod.laporanModule)
  },
  {
    path:'transaksi',
    loadChildren:()=>import('./transaksi/transaksi.module').then(mod=>mod.transaksiModule)
  },
  {
    path:'utility',
    loadChildren:()=>import('./utility/utility.module').then(mod=>mod.utilityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
