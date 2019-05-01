import { Component, OnInit ,Input,ChangeDetectionStrategy} from '@angular/core';
import { Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-template',
  templateUrl: './error-template.component.html',
  styleUrls: ['./error-template.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ErrorTemplateComponent implements OnInit {
  /**
   * take inputs from the parent components -and set it into the child component---
   */
 @Input() errorPrefix:string;
 @Input() minLength:number;
 @Input() maxLength:number;
 @Input() errors:ValidationErrors 
   constructor() { }

  ngOnInit() {
  }

}
