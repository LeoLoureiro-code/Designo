import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { MainSectionComponent } from "../components/main-section/main-section.component";
import { DesignSectionComponent } from "../components/design-section/design-section.component";
import { TeamSectionComponent } from "../components/team-section/team-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainSectionComponent, DesignSectionComponent, TeamSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Designo';
}
