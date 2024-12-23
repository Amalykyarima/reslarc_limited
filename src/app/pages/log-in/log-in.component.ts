import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})

export class LogInComponent {
  loginForm: FormGroup;
  processLoading: boolean = false;

  constructor(private fb: FormBuilder,
    private generalService: GeneralService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    });
  }


  onSubmit(): void {
    this.processLoading = true;
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log('Form Submitted Successfully:', formData);
      this.generalService.login(formData).subscribe((res: any) => {
        console.log('onSubmit',res);
        if (res.statusCode === 202) {
          if (res.data && res.data.jwtToken) {
            this.generalService.newSaveUser(res.data);
          }
          alert(res.message);
          this.loginForm.reset();
          this.router.navigateByUrl('/dashboard')
        } else{
          this.processLoading = false;
          alert(res.message);
        }
      })

    } else {
      console.error('Form is invalid');
    }
  }




}

