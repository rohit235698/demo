import { Component } from '@angular/core';
declare var componentHandler: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

       ngAfterViewChecked (){
         if (componentHandler) {
            componentHandler.upgradeAllRegistered();
        }      
    }
}
