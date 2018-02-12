import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ EmployeeService ]
})
export class HomeComponent implements OnInit {

myModel = "lenendra";
user: string;
editUser: string;
myData = [
    {name:"lenendra",age:22},
    {name:"shubhangi",age:28}
];

childData = [];

constructor(private _employeeService: EmployeeService){ }

myName(){
    alert(this.myModel)
}


ngOnInit(){
  // this.checkDatafromchild()
  this._employeeService.cast.subscribe(user => this.user = user);
}


changeMe(e){
  this.childData.push(e)
}

sendToApi(){
  this._employeeService.editUser(this.editUser)
}

  // checkDatafromchild(e){
  //   alert(JSON.stringify(e))
  // }
}
