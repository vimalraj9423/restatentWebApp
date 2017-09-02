import { Component,OnInit } from '@angular/core';

import { RestarentService} from './service/restarent.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  city = "Select City";
  restarent="";
  cities:Array<string>=[];
  restarents:Array<any>=[]
  constructor(private restarentService:RestarentService){
  

  }
  ngOnInit() {
      this.getCity(()=>{})
  }
  getCity(callBack){
    this.restarentService.getCity().subscribe(Response=>{
      this.cities=Response;
      console.log(this.cities)
      callBack()
    })
  }
  selectCity(index){
    this.city=this.cities[index];
  }
  getRestarent(){
    if(this.city=="Select City"){

    }else{
      this.restarentService.getRestarentByFilter(this.city,this.restarent).subscribe(response=>{
        console.log(response)
        this.restarents=response;
      })
    }
  }
}
