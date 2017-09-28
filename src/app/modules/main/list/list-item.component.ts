import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'lm-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.styl']
})
export class ListItemComponent {
  @Input() employee;
  @Output() itemOnChangeData = new EventEmitter<string>();
  @Output() itemOnBlur = new EventEmitter<boolean>();
  @Output() itemOnChange = new EventEmitter<boolean>();
  editMode = false;
  
  constructor() {}

  onChangeData(model: string){
    this.employee.name = model;
  }
  onBlur(){
    this.itemOnBlur.emit(true)
  }
  onChange(){
    this.itemOnChange.emit(true)
  }
  edit(){
    this.editMode = true;
  }
  delete(){
    this.onChange();
  }
  save(){
    this.editMode = false;
    this.onChange();
  }
}
