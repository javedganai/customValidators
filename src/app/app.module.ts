import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalwrapperComponent } from './modalwrapper/modalwrapper.component';
import { HomeComponent } from './home/home.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ErrorTemplateComponent } from './error-template/error-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalwrapperComponent,
    HomeComponent,
    ReactiveformsComponent,
    ErrorTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
