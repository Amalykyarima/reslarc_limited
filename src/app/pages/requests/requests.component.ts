import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss'
})
export class RequestsComponent {
  requestForm: FormGroup;
  uploadedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private generalService: GeneralService,
    private router: Router) {
    this.requestForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getRequests();
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.uploadedFile = file;
    }
  }

  payment() {

  }

  getRequests(){
    this.generalService.getRequests().subscribe((res: any) => {
      console.log('getRequests',res);
      if (res.statusCode === 200) {
        console.log(res.data);
      } else {
        console.error(res.message);
      }
    })
  }

  onSubmit(): void {
    if (this.requestForm.valid) {
      const formData = this.requestForm.value;
      console.log('Request Submitted Successfully:', formData);
      this.generalService.createRequest(formData).subscribe((res: any) => {
        console.log(res);
        if (res.statusCode === 201) {
          alert(res.message);
          this.requestForm.reset();
          this.router.navigateByUrl('/dashboard')
        } else {
          alert(res.message);
        }
      })

      // Do something with the formData, e.g., send it to the server
    } else {
      console.error('Request is invalid');
    }
  }

}
