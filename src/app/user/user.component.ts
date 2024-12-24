import { Component,signal,computed } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   // users = DUMMY_USERS[randomIndex]; //without signals
   users = signal(DUMMY_USERS[randomIndex]);// with signal

   imagePath = computed(()=> 'assets/users/'+this.users().avatar); //computed signal.
 
   // getter method in defined like a method but is accessed just like a proptery
   // return a random image path to the image property
   // get imagePath(){
   //   return 'assets/users/'+ this.users.avatar ; // without signals
   // }
 
   onSelectUser(){
     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
 
     // this.users = DUMMY_USERS[randomIndex]; //without signals
     this.users.set(DUMMY_USERS[randomIndex]); // with signals
   }
}
