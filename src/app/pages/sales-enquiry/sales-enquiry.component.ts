import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sales-enquiry',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sales-enquiry.component.html',
  styleUrl: './sales-enquiry.component.scss'
})
export class SalesEnquiryComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
  this.contactForm = this.fb.group({
    businessEmail: ['', [Validators.required, Validators.email]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    jobTitle: ['', Validators.required],
    company: ['', Validators.required],
    industry: ['', Validators.required],
    country: ['', Validators.required],
    useCase: ['', Validators.required],
    message: ['', Validators.required],
    preference: ['', Validators.required]
  });
}


  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
