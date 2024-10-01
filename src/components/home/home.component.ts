import { Component } from '@angular/core';
import { AboutMainComponent } from "../about-main/about-main.component";
import { MainSectionComponent } from '../main-section/main-section.component';
import { DesignSectionComponent } from '../design-section/design-section.component';
import { TeamSectionComponent } from '../team-section/team-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMainComponent, MainSectionComponent, DesignSectionComponent, TeamSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
