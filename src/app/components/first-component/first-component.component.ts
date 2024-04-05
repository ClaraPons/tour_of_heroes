import { NgForOf } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent implements OnInit, OnChanges {
  
  @Input() textButton: string = ''
  
  @Output() setInfo: EventEmitter<any> = new EventEmitter()

  constructor(){
    console.log('constructor')
  }

  nomdemavariable: string = 'tes'

  monTableau: string[] = ['Angular', 'Vue', 'React', 'Node', 'Java']

  ngOnInit() : void {
    this.setInfo.emit(this.nomdemavariable) 
    this.maFonction()
  }

  ngOnChanges(): void {
    console.log('OnChanges')
  }

  maFonction(): void {
    console.log('ma fonction')
  }

}
