import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userObj } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userObj : userObj; 
  constructor(private router : Router ) { 
    this.userObj = new userObj();
  }

  ngOnInit(): void {
  }

  // generate new userid 
getNewUserId(){

  const oldRecords = localStorage.getItem('userList');
  if(oldRecords !== null){
    // convert string into object using parse method
    const userList = JSON.parse(oldRecords);
    return userList.length + 1;
  } else {
    return 1;
  }
}

saveUser(){
 
const latestId = this.getNewUserId();
this.userObj.userId = latestId;
const oldRecords = localStorage.getItem('userList');
// if record exist alreay
if(oldRecords !== null){
  // convert string into object using parse method ,parse method has only key
  const userList = JSON.parse(oldRecords);
  // here when add new data from userobj so push in userlist array
 userList.push(this.userObj);
 // convert  object  into string   using stringify method ,stringify method has only key,value pair 
 localStorage.setItem('userList', JSON.stringify(userList));
} else {
 // if record does not exist alreay
 const userArr = [];
 userArr.push(this.userObj);
  // convert  object  into string   using stringify method ,stringify method has only key,value pair 
  localStorage.setItem('userList', JSON.stringify(userArr));

}

// after save record move to get list
   this.router.navigateByUrl('/userList');



}

}
