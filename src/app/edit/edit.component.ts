import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from "../profile-service.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    userProfile: any;
  
  constructor(private profileService: ProfileServiceService) { }

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
  }

  saveProfile(updatedProfile: any){
    this.profileService.updateUserProfile(updatedProfile);
   }

}
