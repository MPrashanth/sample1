import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class HttpsService {

  constructor(private http: HttpClient) { }

  userone(data){
    var response=this.http.post('http://localhost:6767/nani/myproject/users/userone', data);
    return response;
  }
  viewallusers(data){
    var response=this.http.get('http://localhost:6767/nani/myproject/users/viewusers?data='+JSON.stringify(data));
    return response;
  }
}
