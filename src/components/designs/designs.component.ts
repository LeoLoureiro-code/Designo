import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesignDataService, DesignCategory } from '../../services/jsonreader.service';
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

let DesignObject: {
  title: string;
  subtitle: string;
  examples: Example[];
  anchors: Anchor[];
};


@Component({
  selector: 'designs',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './designs.component.html',
  styleUrl: './designs.component.scss',
  providers: [],
})

export class DesignComponent implements OnInit {

  
  designCategories: DesignCategory[] = [];

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
            DesignObject.title = design['design-title'];
            console.log(DesignObject.title);
            DesignObject.subtitle = design['design-subtitle'];
            DesignObject.examples = design['examples'];
            DesignObject.anchors = design['anchors'];
          }
        });
      },
      (error) => {
        console.error('Failed to load design data:', error);
      }
    );
  }
}