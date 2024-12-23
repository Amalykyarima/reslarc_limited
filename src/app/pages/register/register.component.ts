import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registrationForm: FormGroup;
  uploadedFile: File | null = null;

  constructor(private fb: FormBuilder,
              private generalService: GeneralService,
              private router: Router
              ) {


    // Initialize the form group with form controls
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      otherName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      organization: [''],
      jobTitle: [''],
      industry: [''],
      country: [''],
      password: ['', Validators.required]
    });
  }

  // constructor(
  //   private fb: FormBuilder) {
  //   this.registrationForm = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     phone: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
  //     organization: [''],
  //   });
  // }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.uploadedFile = file;
    }
  }

  // onSubmit(): void {
  //   if (this.registrationForm.valid) {
  //     const formData = new FormData();
  //     formData.append('name', this.registrationForm.value.name);
  //     formData.append('email', this.registrationForm.value.email);
  //     formData.append('phone', this.registrationForm.value.phone);
  //     formData.append('organization', this.registrationForm.value.organization);

  //     if (this.uploadedFile) {
  //       formData.append('idCard', this.uploadedFile);
  //     }

  //     console.log('Form submitted!', formData);
  //     // Add API call here to submit formData to your backend
  //   } else {
  //     console.error('Form is invalid');
  //   }
  // }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      console.log('Form Submitted Successfully:', formData);
      this.generalService.register(formData).subscribe((res:any)=>{
        console.log(res);
        if (res.statusCode === 201){
          alert(res.message);
          this.registrationForm.reset();
          this.router.navigateByUrl('/login')
        } else {
          alert(res.message);
        }
      })

      // Do something with the formData, e.g., send it to the server
    } else {
      console.error('Form is invalid');
    }
  }


}
