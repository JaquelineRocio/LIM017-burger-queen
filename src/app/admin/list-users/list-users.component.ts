import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserFirebaseService } from 'src/app/services/user-firebase.service';
import { NewUserComponent } from '../new-user/new-user.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  users!:any
  user!: any;

  constructor(private userFirebaseService: UserFirebaseService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userFirebaseService.getUsers().subscribe((usersFirestore)=>{
      console.log(usersFirestore)
      this.users=usersFirestore;
    })
  }
  deleteUser(user: any){
    this.userFirebaseService.deleteUserFirestore(user);
  }

  openDialogToUpdateUser(user: any, updateValue: any ){
    const dialogRef = this.dialog.open(NewUserComponent, {
      width: '250px',
      data: {user, isUpdating: updateValue},
    });
   dialogRef.afterClosed().subscribe(result=>{
    });
  }
  openDialogToCreateUser(){

    const dialogRef = this.dialog.open(NewUserComponent, {
      width: '250px',
      data: {user: this.user},
    });
  }
}
