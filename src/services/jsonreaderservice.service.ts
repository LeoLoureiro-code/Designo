// src/app/services/design-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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



@Injectable({
  providedIn: 'root'
})
export class DesignDataService {
  private jsonUrl = 'assets/design.json';

  constructor(private http: HttpClient) {}

  getDesignData(): Observable<DesignCategory[]> {
    return this.http.get<DesignCategory[]>(this.jsonUrl);
  }
}

export type DesignData = DesignCategory[];