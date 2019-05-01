import { Component, OnInit, AfterViewInit, ViewContainerRef, Output, EventEmitter } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-modalwrapper',
  templateUrl: './modalwrapper.component.html',
  styleUrls: ['./modalwrapper.component.css']
})
export class ModalwrapperComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  user: any = {
    gender:''
  }
  counter = 0;
  constructor(public viewContainerRef: ViewContainerRef) {

  }

  ngOnInit() {
  }
  // valueChanged(event:any) { // You can give any function name
  //   console.log('the value of the modal is ',event.taget.value);
  //   this.counter = this.counter + 1;
  //   this.valueChange.emit(this.counter);
  //  }    
  ngAfterViewInit() {
    $('#myModal').modal('show');

  }
  /**
   * 
   */
  submitValue() {
    this.valueChange.emit(this.user);
  }
}
