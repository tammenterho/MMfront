import { Component, Input, Inject } from '@angular/core';
import { Campaign } from 'src/app/Campaign';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-campaign-dialog',
  templateUrl: './campaign-dialog.component.html',
  styleUrls: ['./campaign-dialog.component.css'],
})
export class CampaignDialogComponent {
  campaigns: Campaign[] = [];
  @Input() campaignData!: Campaign;
  userFirstName: string = '';
  userLastName: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Campaign,
    private auth: AuthService
  ) {
    this.campaignData = data;
    this.userFirstName = auth.getLogin().firstName;
    this.userLastName = auth.getLogin().lastName;
  }
}
