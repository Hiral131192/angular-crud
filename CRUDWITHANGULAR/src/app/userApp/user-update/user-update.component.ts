import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userObj } from 'src/app/interfaces/user';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  userObj : userObj; 
  constructor(private route: ActivatedRoute, private router : Router ) { 
  
    this.userObj = new userObj();
    this.route.params.subscribe((res)=>{
      this.userObj.userId = res['id']
    }) 
  }

  ngOnInit(): void {
    const oldRecords = localStorage.getItem('userList');
    if(oldRecords !== null){
      const userList = JSON.parse(oldRecords);
      
      const curretUser = userList.find((m : any) => m.userId == this.userObj.userId);
      if(curretUser !== undefined){
        this.userObj.userCity = curretUser.userCity;
        this.userObj.userState = curretUser.userState;
        this.userObj.userName = curretUser.userName;
        this.userObj.userMobile = curretUser.userMobile;
        this.userObj.userAltMobile = curretUser.userAltMobile;
      }
    }
  }



updateUser(){
 
const oldRecords = localStorage.getItem('userList');
// if record exist alreay
if(oldRecords !== null){
  // convert string into object using parse method ,parse method has only key
  const userList = JSON.parse(oldRecords);
 // remove array from original array only 1 record then push new updated record push into array
 userList.splice(userList.findIndex((a:any)=> a.userId == this.userObj.userId),1);
  // here when add new data from userobj so push in userlist array
 userList.push(this.userObj);
 // convert  object  into string   using stringify method ,stringify method has only key,value pair 
 localStorage.setItem('userList', JSON.stringify(userList));
} 
 this.router.navigateByUrl('/userList');

  }


}
