import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [ EmployeeService ]
})
export class TestComponent implements OnInit {

@Input() nameL: string;
@Input() obj:any = Array;

@Output() inputData = new EventEmitter();
@Output() sendData = new EventEmitter();

data:any = [];
emp:any = {};
user: string;
name1: string;
employee = [
    {ename:"lenendra",age:23,location:"pune",gendar:"M"},
    {ename:"shubhangi",age:25,location:"pune",gendar:"F"},
    {ename:"aashi",age:20,location:"MP",gendar:"F"},
    {ename:"vijay",age:23,location:"pune",gendar:"M"},
]

chilData:string ="";


constructor(private _employeeService:EmployeeService){
    this.test();
    this.name1 = this._employeeService.name
}

ngOnInit(){
  this._employeeService.cast.subscribe(user => this.user = user);
}

childComp(){
    this.inputData.emit(this.chilData);
}

deleteDate(i){
    this.employee.splice(i,1);
}

test(){
    this._employeeService.getData()
      .subscribe(data1 => {
        this.data = data1
        console.log(this.data);
    })
}

sendData1(){
    this.sendData.emit(this.data)
}

onClickAdd(){
  for (var x in this.emp) {
    this.employee.push(this.emp)
    this.emp = {}
    return false;
  }
  alert("please fill all the fields")
  return true;

}



}
