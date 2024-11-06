// src/app/services/design-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

export interface DesignCategory {
  "design-title": string;
  "design-subtitle": string;
  examples: {
    "example-image": string;
    "example-title": string;
    "example-description": string;
  }[];
  anchors: {
    "anchor-one"?: string;
    "anchor-two"?: string;
  }[];
}

var designChosen:string;



@Injectable({
  providedIn: 'root'
})
export class DesignDataService {
  //Variables
  private dataDesign = new BehaviorSubject<string>('');
  currentData = this.dataDesign.asObservable();
  private jsonUrl = 'assets/design.json';

  constructor(private http: HttpClient) {}

  getDesignData(): Observable<DesignCategory[]> {
    return this.http.get<DesignCategory[]>(this.jsonUrl);
  }

  changeDesign(data: string){
    this.dataDesign.next(data);
  }

}


export type designChosen = "";
export type DesignData = DesignCategory[];