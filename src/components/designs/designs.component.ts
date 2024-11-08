import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesignDataService } from '../../services/jsonreader.service';

@Component({
  selector: 'designs',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './designs.component.html',
  styleUrl: './designs.component.scss',
  providers: [DesignDataService],
})

export class DesignComponent implements OnInit {
  
  designData: string = '';

  constructor(private designDataService: DesignDataService) {}

  ngOnInit() {
    this.designDataService.currentData.subscribe((data) => {
      this.designData = data;
      console.log(data);
    });
  }
}