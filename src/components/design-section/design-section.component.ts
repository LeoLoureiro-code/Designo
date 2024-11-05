import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { designChosen } from '../../services/jsonreader.service';


@Component({
  selector: 'design-section',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './design-section.component.html',
  styleUrl: './design-section.component.scss'
})




export class DesignSectionComponent {

  getDesign(): string {
    return "it works!";
  }

}
