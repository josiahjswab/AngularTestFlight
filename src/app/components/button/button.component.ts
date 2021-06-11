import { Component, OnInit, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log()
    this.text = changes.data.currentValue;
  }
  
  ngOnInit(): void {
  }


}
