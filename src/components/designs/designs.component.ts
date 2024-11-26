import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesignDataService, DesignCategory } from '../../services/jsonreader.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


type Example = {
  "example-image": string;
  "example-title": string;
  "example-description": string;
};

type Anchor = {
  "anchor-one"?: string;
  "anchor-two"?: string;
};




@Component({
  selector: 'designs',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './designs.component.html',
  styleUrl: './designs.component.scss',
  providers: [],
})

export class DesignComponent implements OnInit {

  
  designCategories: DesignCategory[] = [];
  anchorOne: any ="";
  anchorTwo: any ="";

   DesignObject: {
    title: string;
    subtitle: string;
    examples: Example[];
    anchors: Anchor[];
  } = {
    title: '',
    subtitle: '',
    examples: [],
    anchors: []
  };


  constructor(private designDataService: DesignDataService) {}

  ngOnInit(): void {

    this.designDataService.getDesignData().subscribe(
      (data) => {
        this.designCategories = data;
        data.forEach(design => {
          if(design['design-title'] == this.designDataService.dataDesign){
            //Fix this. It is undefined
            this.DesignObject.title = design['design-title'];
            console.log(this.DesignObject.title);
            this.DesignObject.subtitle = design['design-subtitle'];
            this.DesignObject.examples = design['examples'];
            this.DesignObject.anchors = design['anchors'];
            //Trim the JSON value
            this.anchorOne = this.DesignObject.anchors[0]['anchor-one']?.replace(/\s/g, "").toLowerCase();
            this.anchorTwo = this.DesignObject.anchors[1]['anchor-two']?.replace(/\s/g, "").toLowerCase();
          }
        });
      },
      (error) => {
        console.error('Failed to load design data:', error);
      }
    );
  }
}