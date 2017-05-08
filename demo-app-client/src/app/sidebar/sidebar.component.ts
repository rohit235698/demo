import { Component ,OnInit, AfterViewChecked} from '@angular/core';
import { ROUTES } from './sidebar-routes.config';

declare var componentHandler: any;
@Component({
  selector: 'sidebar-cmp',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit ,AfterViewChecked {
menuItems : any[];  
     ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

     ngAfterViewChecked (){
         if (componentHandler) {
            componentHandler.upgradeAllRegistered();
        }      
    }
     
}
