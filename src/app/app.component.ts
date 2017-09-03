import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';
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
  constructor(private restarentService:RestarentService,private router:Router){
  

  }
  ngOnInit() {
      this.getCity(()=>{
        this.restarentService.getRestarentByFilter("",this.restarent).subscribe(response=>{
          console.log(response)
          this.restarents=response;
        })
      })
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
  openRestarent(id){
    console.log(id)
    this.router.navigate(["/"+id])
  }
}
