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
  

  constructor(private designDataService: DesignDataService) {}

  ngOnInit(): void {

    this.designDataService.getDesignData().subscribe(
      (data) => {
        this.designCategories = data;
        data.forEach(design => {
          
        });
      },
      (error) => {
        console.error('Failed to load design data:', error);
      }
    );
    console.log("En designs");
          console.log(this.designDataService.dataDesign);
  }
}