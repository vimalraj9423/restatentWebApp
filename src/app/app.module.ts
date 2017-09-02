import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RestarentService} from './service/restarent.service';
import { MainComponent } from './main/main.component';
import {RestarentDescriptionComponent} from './restarent-description/restarent-description.component'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RestarentDescriptionComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    HttpModule,
    RouterModule.forRoot([{
      path:"",
      component:AppComponent
    },{
      path:':id',
      component:RestarentDescriptionComponent
    }])
  ],
  providers: [RestarentService],
  bootstrap: [MainComponent]
})
export class AppModule { }
