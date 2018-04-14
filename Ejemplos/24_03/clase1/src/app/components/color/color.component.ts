import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.styl']
})
export class ColorComponent implements OnInit {

  colors:Array<String>=['red','green','blue']
  colorSelected:String='red'
  optionSelected:String='red'
  constructor() { }


  ngOnInit() {
  }

  changeColor(color){
    this.colorSelected=color
  }

  getColor(){
    return this.colorSelected
  }

}
