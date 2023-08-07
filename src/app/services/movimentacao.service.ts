import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {
  baseUrl: String = "http://Banklineapifinal-env.eba-hmprka6y.us-east-2.elasticbeanstalk.com";

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movimentacoes`);
  }

  create(movimentacao:any) : Observable<any> {
    return this.http.post(`${this.baseUrl}/movimentacoes`, movimentacao);
  }
  findByIdConta(idConta:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movimentacoes/${idConta}`);
  }
}
