import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JSONReaderService } from '../../services/jsonreaderservice.service';


interface DesignData {
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

@Component({
  selector: 'designs',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './designs.component.html',
  styleUrl: './designs.component.scss',
  providers: [JSONReaderService],
})
export class DesignsComponent {

  constructor(private jsonReaderService: JSONReaderService) {}

  ngOnInit(): void {
    let designArray:[];
    this.jsonReaderService.getJsonData().subscribe(data => {
      console.log(data);
    });
  }

}
