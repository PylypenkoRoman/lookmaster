import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lm-blog-child',
  templateUrl: './blog-child.component.html',
  styleUrls: ['./blog-child.component.styl']
})
export class BlogChildComponent {
  constructor() { }

  @Input() userName: string;
  @Input() userAge: number;



  @Output() onChanged = new EventEmitter<boolean>()
  change(incrisedValue){
    this.onChanged.emit(incrisedValue);
  }
  


  @Input() dogName:string;
  @Output() dogNameChange = new EventEmitter<string>()
  
  onNameChange(model: string){
    console.log(model)
    this.dogName = model
    this.dogNameChange.emit(model)
  }

}
