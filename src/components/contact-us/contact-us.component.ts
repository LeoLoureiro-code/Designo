import { Component } from '@angular/core';
import { LocationsNavComponent } from "../locations-nav/locations-nav.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [LocationsNavComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
