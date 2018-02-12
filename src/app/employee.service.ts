import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EmployeeService {

 data1:any = []
  private user = new BehaviorSubject<string>('lenendra');
  cast = this.user.asObservable();

 constructor(private http: HttpClient){ }

 editUser(newUser){
  this.user.next(newUser);
 }

 getData(){
   return this.http.get('https://api.github.com/users/seeschweiler?page=1&limit=10').map(data => {
      return this.data1 = data;
   });
 }


 name = "lenendsfdsfdsfdsdsfdsfdsf dsfdsfdsfdsf dra";

}
