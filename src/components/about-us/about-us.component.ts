import { Component } from '@angular/core';
import { LocationsNavComponent } from "../locations-nav/locations-nav.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [LocationsNavComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
