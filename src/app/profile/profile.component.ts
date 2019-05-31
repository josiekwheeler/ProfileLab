import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from "../profile-service.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: any;

  constructor(private profileService: ProfileServiceService) { }

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();

  }
}
