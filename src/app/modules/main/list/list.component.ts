import { Component, forwardRef } from '@angular/core';
import { Employee } from "app/modules/main/list/employee";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ListItemComponent } from "app/modules/main/list/list-item.component";

@Component({
  selector: 'lm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ListComponent),
      multi: true
    }
  ]
})

export class ListComponent implements ControlValueAccessor{
  innerValue = []
  newInnerValue: string;

  private listItem: ListItemComponent

  constructor() { }

  private onChangeCallback = (v) => {}
  private onTouchedCallback = () => {}

  get value(): any {
    return this.innerValue;
  };

  set value(v: any) {
      if (v !== this.innerValue) {
          this.innerValue = v;
          this.onChangeCallback(v);
      }
  }

  onBlur() {
    this.onTouchedCallback();
    console.log("listOnBlur")
  }

  itemOnBlur(event){
    console.log("itemOnBlur")
    this.onTouchedCallback();
  }

  itemOnChange(event){
    console.log("itemOnChange")
    this.onChangeCallback(this.innerValue);
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
        this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  add(){ 
      this.innerValue.push(new Employee( this.newInnerValue));
      this.newInnerValue = "";
      this.onChangeCallback(this.innerValue);
      console.log("listOnChange")
  }
}