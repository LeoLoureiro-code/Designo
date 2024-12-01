// src/app/services/design-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DesignDataService {
  public dataDesign: string = "";
  private jsonUrl = 'assets/design.json';

  constructor(private http: HttpClient) {}

  getDesignData(): Observable<DesignCategory[]> {
    return this.http.get<DesignCategory[]>(this.jsonUrl);
  }

}

export type DesignData = DesignCategory[];


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
