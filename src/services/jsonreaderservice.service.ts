import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONReaderService {

  private jsonUrl = 'assets/design.json';

  constructor(private httpClient: HttpClient) 
  {   }

  getJsonData(): Observable<any> {
    return this.httpClient.get<any>(this.jsonUrl);
  }

}
