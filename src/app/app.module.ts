import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildComponent } from './child/child.component';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,ChildComponent,HighlightDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
