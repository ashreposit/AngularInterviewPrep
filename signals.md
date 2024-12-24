# signals

- import the signal from angular/core

import { signal } from '@angular/core';

- assign the signal to a property inside the component class

  users = signal(DUMMY_USERS[randomIndex]);

- when a change occures, the angular is notified about the change then angular updates the part of the UI which needs updating. 

  this.users.set(DUMMY_USERS[randomIndex]);

- when ever accessing a property that stores a signal , execute this property as a function

    return 'assets/users/'+ this.users().avatar ;

    <img [src]="imagePath" [alt]="users().name" srcset="">
    <span>{{users().name}}</span>


change updation mechanism :

without using signals,while updating a state using the zone.js(sub-package) angular checks in all the components for the particular trigger for the change.Other state management includes different types of binding 

using signals angular doesn't have to check for everything for every possible event