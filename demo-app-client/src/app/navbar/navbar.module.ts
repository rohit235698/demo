import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({

	declarations :[ NavbarComponent ],
	imports : [  FormsModule,CommonModule
	],
	exports : [ NavbarComponent ],
	providers : [ ]
})

export class NavbarModule {

}