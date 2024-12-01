import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationsNavComponent } from '../locations-nav/locations-nav.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [LocationsNavComponent, ReactiveFormsModule, CommonModule],  
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);

     
      this.contactForm.reset();

      this.contactForm.markAsPristine();
      this.contactForm.markAsUntouched();
    } else {
      console.error('Form is invalid');
    }
  }
}