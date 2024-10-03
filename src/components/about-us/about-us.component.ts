import { Component } from '@angular/core';
import { CompanyHistoryComponent } from "../company-history/company-history.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CompanyHistoryComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
