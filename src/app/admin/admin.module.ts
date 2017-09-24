import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminMenuComponent }  from './adminMenu/admin-menu.component';

const AdminRoutes: Routes = [
    { 
        path: 'admin',  
        component: AdminComponent, 
        children: [
            { path: '', component: AdminMenuComponent },
            // { path: 'login', component: LoginComponent },
            // { path: 'signup', component: SignUpComponent },
            // { path: '', component: AdminMenuComponent, canActivate: [UserService] }
        ]
    },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes)
  ],
  declarations: [
        AdminComponent,
        AdminMenuComponent,
    ],
  exports: [
  	RouterModule
  ]
})
export class AdminModule { }
