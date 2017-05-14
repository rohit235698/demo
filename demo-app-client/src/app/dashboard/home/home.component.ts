import { Component, AfterViewChecked ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

declare var componentHandler: any;
//declare var getmdlSelect :any ;
@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements AfterViewChecked {
list : any ;
projectnames : any[]=[];
envnames : any[]=[];
servernames : any[]=[];
projectname : string='Project';
servername : string ='Server';
envname :string ='Enviornment';
toogle = {
      project : false,
      env : false,
      server : false
};

	constructor (private _service : SharedService ) {
          this.list = this._service.getItems()
          this.getProjectNames();
	        
  }
      ngAfterViewChecked (){
         if (componentHandler) {
            componentHandler.upgradeAllRegistered();
        }      
    }
    getProjectNames(){
      let projectname = '';
      this.projectnames = this.list.filter((project)=>{
          if(projectname != project.project){
               projectname = project.project;
              return project.project;
            }
      })
    }
    getEnvNames() {
      return this.list.filter((project)=>{
          if(this.projectname==project.project)
            return project;
      })
    }
    getServerName() {

     return this.envnames.filter((project)=>{
          if(this.envname==project.enviornment)
            return project;
      });
    }
    toggle(field) {
      this.toogle[field] = !this.toogle[field];
    }
    setproject(project){
       this.toggle('project');
       this.projectname= project.project;
       this.envname = 'Enviornment';
       this.envnames = this.getEnvNames();
       this.removeserver();
    }

    setenv(env){
      this.toggle('env');
      this.envname =env.enviornment;
      this.servernames =  this.getServerName();
      this.setserver(this.servernames[0]);
      this.toggle('server');
    }
    setserver(server){
      this.servername = server.server;
      this.toggle('server');

    }
    removeserver(){
      this.servername = 'Server';
      this.servernames=[];
    }
}
