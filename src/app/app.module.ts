import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RestarentService} from './service/restarent.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    HttpModule
  ],
  providers: [RestarentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
