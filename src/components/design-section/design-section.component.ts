import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {DesignDataService } from '../../services/jsonreader.service';


@Component({
  selector: 'design-section',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './design-section.component.html',
  styleUrl: './design-section.component.scss'
})




export class DesignSectionComponent{

  constructor(private designDataService: DesignDataService){}

  SendData(designChosen: any){
    this.designDataService.dataDesign = designChosen;
  }
}
