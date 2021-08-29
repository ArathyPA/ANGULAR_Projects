import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';
  userName='TestuserName';
  logArry=[1];
  flag=true;
  
onbutton(){
  this.userName="";  
  }
showPara(){  
  this.flag= !this.flag;
  this.logArry.push(this.logArry.length+1);
}
}
