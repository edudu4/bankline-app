import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {
baseUrl : String = 'http://Banklineapifinal-env.eba-hmprka6y.us-east-2.elasticbeanstalk.com';

  constructor(private http: HttpClient) { }
  
  list(): Observable<any> {
    return this.http.get(`${this.baseUrl}/correntistas`);
  }
  create(correntista:any) : Observable<any> {
    return this.http.post(`${this.baseUrl}/correntistas`, correntista);
  }
}