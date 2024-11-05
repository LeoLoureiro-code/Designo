import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesignDataService, DesignCategory } from '../../services/jsonreader.service';

@Component({
  selector: 'designs',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './designs.component.html',
  styleUrl: './designs.component.scss',
  providers: [DesignDataService],
})

export class DesignComponent implements OnInit {
  designData: DesignCategory[] = [];

  constructor(private designDataService: DesignDataService) {}

  ngOnInit(): void {
    this.designDataService.getDesignData().subscribe(data => {
      this.designData = data;
      console.log(this.designData);
    });
  }
}