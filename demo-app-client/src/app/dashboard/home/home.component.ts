import { Component, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

declare var componentHandler: any;
@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements AfterViewChecked {

	constructor ( ) {

	}
      ngAfterViewChecked (){
         if (componentHandler) {
            componentHandler.upgradeAllRegistered();
        }      
    }
}
