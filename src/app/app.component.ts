import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { MainSectionComponent } from "../components/main-section/main-section.component";
import { DesignSectionComponent } from "../components/design-section/design-section.component";
import { TeamSectionComponent } from "../components/team-section/team-section.component";
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { LocationsComponent } from '../components/locations/locations.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { DesignsComponent } from '../components/designs/designs.component';
import { JSONReaderService } from '../services/jsonreaderservice.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainSectionComponent, DesignSectionComponent, TeamSectionComponent, AboutUsComponent, LocationsComponent,ContactUsComponent, DesignsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [JSONReaderService],
})
export class AppComponent {
  title = 'Designo';

  constructor(private jsonReaderService: JSONReaderService) {}

  ngOnInit(): void {
    this.jsonReaderService.getJsonData().subscribe(data => {
      console.log(data);
    });
  }
}
