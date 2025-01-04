import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from 'express';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-all-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-requests.component.html',
  styleUrl: './all-requests.component.scss'
})
export class AllRequestsComponent {
  requests:any;
  selectedRequest: any = null;
  id: string = ""



  constructor(
    private generalService: GeneralService,

    ) { }

  ngOnInit() {
    this.getRequests();
  }

  // getRequests(){
  //   this.generalService.getRequests().subscribe((res: any) => {
  //     console.log('getRequests',res);
  //     if (res.statusCode === 200) {
  //       this.requests = res.data;

  //       console.log(res.data);
  //     } else {
  //       console.error(res.message);
  //     }
  //   })
  // }

  getRequests() {
    this.generalService.getRequests().subscribe((res: any) => {
      console.log('getRequests', res);
      if (res.statusCode === 200) {
        if (res.data.length > 0) {
          this.requests = res.data;
          console.log(res.data);
        } else {
          this.requests = []; // Ensure it's an empty array
          console.log('No requests found');
        }
      } else {
        this.requests = []; // Ensure it's an empty array
        console.error(res.message);
      }
    });
  }

  showRequestDetails(request: any): void {
    this.selectedRequest = request;
    this.id = this.selectedRequest._id;
    console.log('id', this.selectedRequest._id)
  }

  goBack(): void {
    this.selectedRequest = null;
  }

  downloadFile(fileUrl: string): void {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop() || 'download'; // Extract file name or set default
    link.target = '_blank'; // Optional: opens the download in a new tab
    link.click();
  }




}
