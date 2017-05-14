import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NavbarModule } from './navbar/navbar.module';
import { SharedService } from './shared/shared.service';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    SidebarModule,
    NavbarModule,
    DashboardModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([ ])
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
