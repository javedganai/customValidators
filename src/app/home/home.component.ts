import { Component, OnInit ,ViewChild,ViewContainerRef,ComponentFactoryResolver} from '@angular/core';
import {ModalwrapperComponent} from '../modalwrapper/modalwrapper.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  componentRef: any;
  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor( private _componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
    // this.loadcom('hello');
  }

loadcom(message){
  const factory = this._componentFactoryResolver.resolveComponentFactory(ModalwrapperComponent);
  this.componentRef = this.entry.createComponent(factory);
  this.componentRef.instance.message = message;
}
destroyComponent() {
  this.componentRef.destroy();
}
getValueformChild(value:any){
  console.log('the valueis',value)

}
  // loadComponent() {
  //   let viewContainerRef = this.dynamicDirective.viewContainerRef;
  //   viewContainerRef.clear();
  //   let componentFactory = this.componentFactoryResolver.resolveComponentFactory(CommonModalComponent);
  //   let componentRef =viewContainerRef.createComponent(componentFactory);
  //  }
}
