import { Component, Input, Inject } from '@angular/core';
import { Campaign } from 'src/app/Campaign';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-campaign-dialog',
  templateUrl: './campaign-dialog.component.html',
  styleUrls: ['./campaign-dialog.component.css'],
})
export class CampaignDialogComponent {
  campaigns: Campaign[] = [];
  @Input() campaignData!: Campaign;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Campaign) {
    this.campaignData = data;
    console.log(this.campaignData);
  }
}
