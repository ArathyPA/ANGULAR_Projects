import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';
  userName='TestuserName';
  flag=true;
onbutton(){
  this.userName="";  
  }
showPara(){
  this.flag= !this.flag;

}
}
