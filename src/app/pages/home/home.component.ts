import { Component } from '@angular/core';
import { FirstComponentComponent } from '../../components/first-component/first-component.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FirstComponentComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  infoFromChild: string = ''

  getInfo(event : string): void {
    this.infoFromChild = event
    console.log(event)
  }

}
