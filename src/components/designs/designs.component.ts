import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JSONReaderService } from '../../services/jsonreaderservice.service';

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
    this.jsonReaderService.getJsonData().subscribe(data => {
      console.log(data);
    });
  }

}
