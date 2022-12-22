import { Component, OnInit } from '@angular/core';
import { userObj } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: userObj [];
  constructor() {
    this.userList = [];
   }

  ngOnInit(): void {
    const records = localStorage.getItem('userList');
    if(records !== null){
      this.userList = JSON.parse(records);
    }
  }

delete(id:any){
  const oldRecords = localStorage.getItem('userList');
  // if record exist alreay
  if(oldRecords !== null){
    // convert string into object using parse method ,parse method has only key
    const userList = JSON.parse(oldRecords);
   // remove array from original array only 1 record then push new updated record push into array
   userList.splice(userList.findIndex((a:any)=> a.userId == id),1);

   // convert  object  into string   using stringify method ,stringify method has only key,value pair 
   localStorage.setItem('userList', JSON.stringify(userList));
  } 
// after delete get will be call
const records = localStorage.getItem('userList');
if(records !== null){
  this.userList = JSON.parse(records);
}


}


}
