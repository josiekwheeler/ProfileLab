import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

    userProfile: any = {
      name: "Grant Chirpus", 
      contactInfo: "grant@grandcircus.co", 
      bio: "I am pretty cool. I a great job. I like to play Tetris. I am pretty ok at angularJS."};


  constructor(private router: Router) { }
  
  getUserProfile(): any {
    return this.userProfile;
  }

  updateUserProfile(updatedProfile: any): void {
    this.userProfile = { ...updatedProfile}
    this.router.navigate(['/profile']);
  }
};

