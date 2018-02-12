import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import * as moment from 'moment';

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
date = new Date();
newDate:string;

constructor(private _employeeService: EmployeeService){
 this.newDate = moment(this.date).format('DD-MM-YYYY')
  console.log(this.newDate)
}

myName(){
    alert(this.myModel)
}


ngOnInit(){
  this._employeeService.cast.subscribe(user => this.user = user);
}


changeMe(e){
  this.childData = e
  console.log(this.childData)
}

sendToApi(){
  this._employeeService.editUser(this.editUser)
}

}
