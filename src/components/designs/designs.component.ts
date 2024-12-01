import { Component, OnInit, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DesignDataService, DesignCategory } from '../../services/jsonreader.service';
import { Observable } from 'rxjs';
import { CommonModule, isPlatformBrowser } from '@angular/common';

type Example = {
  "example-image": string;
  "example-title": string;
  "example-description": string;
};

type Anchor = {
  "anchor-one"?: any;
  "anchor-two"?: any;
};

@Component({
  selector: 'designs',
  standalone: true,
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.scss'],
  imports: [CommonModule, RouterModule],
  providers: [],
})

export class DesignComponent implements OnInit {
  designCategories: DesignCategory[] = [];
  anchorOne: any = "";
  anchorTwo: any = "";

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

  constructor(
    private designDataService: DesignDataService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID to check environment
  ) {}

  ngOnInit(): void {
    // Check if DesignObject is stored in localStorage
    const storedDesignObject = localStorage.getItem('DesignObject');
    if (storedDesignObject) {
      this.DesignObject = JSON.parse(storedDesignObject);
      this.initializeAnchors();
    } else {
      // Fetch from the service if not found in localStorage
      this.designDataService.getDesignData().subscribe(
        (data: any[]) => {
          this.designCategories = data;
          const currentDesign = data.find(
            (design: { [x: string]: string }) => design['design-title'] === this.designDataService.dataDesign
          );
          if (currentDesign) {
            this.populateDesignObject(currentDesign);
          }
        },
        (error: any) => {
          console.error('Failed to load design data:', error);
        }
      );
    }
  }
  

  fetchDesignData(): void {
    this.designDataService.getDesignData().subscribe(
      (data: any[]) => {
        this.designCategories = data;
        data.forEach((design: { [x: string]: any; }) => {
          if (design['design-title'] === this.designDataService.dataDesign) {
            this.populateDesignObject(design);
          }
        });
      },
      (error: any) => {
        console.error('Failed to load design data:', error);
      }
    );
  }

  ChangeDesign(nextDesign: string): void {
    this.designDataService.dataDesign = nextDesign;

    // Reload the design data
    this.designDataService.getDesignData().subscribe(
      (newDesign: any[]) => {
        const updatedDesign = newDesign.find(
          (design: { [x: string]: string; }) => design['design-title'].toLowerCase() === nextDesign.toLowerCase()
        );

        if (updatedDesign) {
          this.populateDesignObject(updatedDesign);
          // Store the updated DesignObject in localStorage
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('DesignObject', JSON.stringify(this.DesignObject));
          }
          // Trigger change detection manually
          this.cdr.detectChanges();
        }
      },
      (error: any) => {
        console.error('Failed to load design data:', error);
      }
    );
  }

  populateDesignObject(design: any): void {
    if (design && design['design-title'] && design['design-subtitle'] && design['examples'] && Array.isArray(design['anchors'])) {
      this.DesignObject.title = this.capitalizeTitle(design['design-title']);
      this.DesignObject.subtitle = design['design-subtitle'];
      this.DesignObject.examples = design['examples'];
      this.DesignObject.anchors = design['anchors'] || [];
  
      // Safely extract anchors
      this.anchorOne = this.DesignObject.anchors[0]?.['anchor-one']
        ? this.DesignObject.anchors[0]['anchor-one'].replace(/\s/g, '').toLowerCase()
        : '';
      this.anchorTwo = this.DesignObject.anchors[1]?.['anchor-two']
        ? this.DesignObject.anchors[1]['anchor-two'].replace(/\s/g, '').toLowerCase()
        : '';
  
      console.log('anchorOne:', this.anchorOne);
      console.log('anchorTwo:', this.anchorTwo);
    } else {
      console.error('Invalid or incomplete design data:', design);
      // Reset DesignObject to prevent rendering issues
      this.DesignObject = {
        title: '',
        subtitle: '',
        examples: [],
        anchors: []
      };
      this.anchorOne = '';
      this.anchorTwo = '';
    }
  }
  

  capitalizeTitle(title: string): string {
    return title.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  initializeAnchors(): void {
    this.anchorOne = this.DesignObject.anchors[0]?.['anchor-one']
      ? this.DesignObject.anchors[0]['anchor-one'].replace(/\s/g, '').toLowerCase()
      : '';
    this.anchorTwo = this.DesignObject.anchors[1]?.['anchor-two']
      ? this.DesignObject.anchors[1]['anchor-two'].replace(/\s/g, '').toLowerCase()
      : '';
  }
}
