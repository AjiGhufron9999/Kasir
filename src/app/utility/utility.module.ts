import { NgModule } from "@angular/core";
import { UbahPasswordComponent } from "./ubah-password/ubah-password.component";
import { UserAccountComponent } from "./user-account/user-account.component";
import { RouterModule, Routes } from '@angular/router';
import { InstansiComponent } from './instansi/instansi.component';


export const routes: Routes = [
    {
        path:'instansi',
        component:InstansiComponent
    },
    {
        path:'ubah-password',
        component:UbahPasswordComponent
    },
    {
        path:'user-account',
        component:UserAccountComponent
    }
]


@NgModule({
    declarations: [
      InstansiComponent,
      UbahPasswordComponent,
      UserAccountComponent
    ],
    imports: [
      RouterModule.forChild(routes)
 
    ],
})
  export class utilityModule { }