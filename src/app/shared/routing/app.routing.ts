import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { ErrorComponent } from '../../error/error.component';
import { AboutComponent } from '../../singles/about/about.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '' , component: HomeComponent},
            { path: 'about' , component: AboutComponent},
            { path: '**' , component: ErrorComponent }
        ])    
    ],
    exports: [
        RouterModule
    ],
    declarations: [
    ]   
})
export class AppRoutingModule {}

