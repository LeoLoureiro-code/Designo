import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesignDataService, DesignCategory } from '../../services/jsonreader.service';
import { Observable } from 'rxjs';

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

  title!: string;
  description! :string;
  

  constructor(private designDataService: DesignDataService) {}

  ngOnInit(): void {

    this.designDataService.getDesignData().subscribe(
      (data) => {
        this.designCategories = data;
        data.forEach(design => {
          if(design['design-title'] == this.designDataService.dataDesign){
            this.title = design['design-title'];
            this.description = design['design-subtitle']
          }
        });
      },
      (error) => {
        console.error('Failed to load design data:', error);
      }
    );
  }
}