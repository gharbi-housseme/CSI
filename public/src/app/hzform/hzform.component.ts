import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database_hz.service';

@Component({
  selector: 'app-hzform',
  templateUrl: './hzform.component.html',
  styleUrls: ['./hzform.component.css']
})
export class HzformComponent implements OnInit {
  isSubmitted = false;
  hzformForm: FormGroup; //there is no mistake in the name of this variable
  errors = {};
  success = false;
 
  constructor(public db :DatabaseService) { }

  ngOnInit() {
    this.hzformForm = new FormGroup({
      teamname: new FormControl('', Validators.required),
      fname1:  new FormControl('', Validators.required),
      lname1: new FormControl('', Validators.required),
      school1: new FormControl('', Validators.required),
      email1: new FormControl('', [Validators.required, Validators.email]),
      fname2: new FormControl(''),
      lname2: new FormControl(''),
      email2: new FormControl('', Validators.email),
      school2: new FormControl(''),
      fname3: new FormControl(''),
      lname3: new FormControl(''),
      email3: new FormControl('', Validators.email),
      school3: new FormControl('',),
    });
  }
  get f() { return this.hzformForm.controls; }
  onResetForm(){
    this.hzformForm.reset();
  }
  submit() {
    this.isSubmitted = true;

    if (this.hzformForm.valid) {
          this.db.saveMessage(this.hzformForm.value);
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
