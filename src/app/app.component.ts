import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data = true;
  isLoggedin = true;
  inpbox = '';
  weather = 'not seems good!';
  gdfromc = false;
  valuefromparent = ''
  gdfc(data){
    this.valuefromparent = data;
    this.gdfromc = true;
  }
}
