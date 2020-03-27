import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isSubmitted = false;
  contactForm: FormGroup;
  errors = {};
  success = false;
 
  constructor(public db :DatabaseService) { 
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  get f() { return this.contactForm.controls; }
  onResetForm(){
    this.contactForm.reset();
  }
  submit() {
    this.isSubmitted = true;

    if (this.contactForm.valid) {
          this.db.saveMessage(this.contactForm.value);
          this.onResetForm();
          this.success = true;
        }
    else {
        (e: any) => {
          this.errors = e.error.errors;
        };
    }
  }
}



