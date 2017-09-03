import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common'
import { RouterModule} from '@angular/router'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RestarentService} from './service/restarent.service';
import { MainComponent } from './main/main.component';
import {RestarentDescriptionComponent} from './restarent-description/restarent-description.component'
import { TabsModule } from 'ngx-bootstrap';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RestarentDescriptionComponent,
    LoaderComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CKEditorModule,
    TabsModule.forRoot(),
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
