import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestarentService {
  baseUrl="http://ec2-52-10-202-93.us-west-2.compute.amazonaws.com:3000"
  constructor(private http:Http) { }

  getRestarentByFilter(city,restarent_name): Observable <any>{
    return this.http.post(this.baseUrl+"/restarent/filter",{
            city:city ,
            restarent_name: restarent_name
          }).map(response=>response.json())
  }
  getCity() : Observable <any>{
 let headers: Headers = new Headers();
    return this.http.get(this.baseUrl+"/getCity",null).map(res=>res.json())
  }

}
